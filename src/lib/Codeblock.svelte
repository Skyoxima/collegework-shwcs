<script lang="ts">
  import { unified } from "unified";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
  import { createHighlighterCore } from "shiki/core";
  import { createOnigurumaEngine } from "shiki/engine/oniguruma";
  import rehypeStringify from "rehype-stringify";

  import { currHltdLine, currentProject } from "../state.svelte";
  import type { Action } from "svelte/action";
  import type { HighlighterCore, HighlighterGeneric } from "shiki/core";
  import { onDestroy } from "svelte";

  let highlighter: HighlighterCore;
  async function processCode(lang: string, codeString: string) {
    const markdown = "```" + lang + "\n" + codeString;

    // ~ code-splitting for not importing the whole shiki library... that's why have to use shiki instead of rehype-pretty-code
    highlighter = await createHighlighterCore({
      themes: [
        import('@shikijs/themes/kanagawa-dragon')
      ],
      langs: [
        import('@shikijs/langs/python'),
        import('@shikijs/langs/c')
      ],
      engine: createOnigurumaEngine(() => import('shiki/wasm'))
    })

    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeShikiFromHighlighter, highlighter as HighlighterGeneric<any, any>, {theme: 'kanagawa-dragon'})
      .use(rehypeStringify)
      .process(markdown);

    return file.toString();
  }

  // using derived here is the correct approach. A pure function is returning the same O/P for the same I/P (I/P's state is changing elsewhere, not here)
  let processedCode = $derived(
    processCode(
      currentProject.projectBody.lang,
      currentProject.projectBody.codeString
    )
  );
  // above derived is deriving from the currentProject state variable.

  const lineHlt: Action = (node: HTMLElement) => {
    // I want to keep a pointer to all the children span nodes once the whole 'code' block is mounted
    const allLines = node.querySelectorAll('span.line');
    
    // effect tracks currHltdLine... now I want to only apply this to the number mentioned in this variable and remove from the rest if existed
    // to make it more efficient, I can use the keys of the comments properties to only check for those who could possibly have the highlights
    $effect(() => {
      if (currHltdLine.value > 0) {
        // this will be O(m), m being the number of comments for the codeblock. Previously this was O(n) with n being the number of lines
        for (const hltable of Object.keys(currentProject.projectBody.comments).map((val) => Number(val) - 1)) {
          allLines[hltable].classList.remove('highlighted-line');
        }

        allLines[currHltdLine.value - 1].classList.add('highlighted-line');
        allLines[currHltdLine.value - 1].scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        })
      }
    })
  }

  // "Shiki Highlighter Core must be a singleton", hence dispose the unused/previously used (by a previous codeblock)
  onDestroy(() => {
    highlighter.dispose();
  })
</script>

<!-- Actions and use: directive go hand-in-hand, and it was a godsent here! -->
<section
  id="code-side"
  class="w-full h-1/3 md:h-auto p-2 rounded-2xl bg-kwdr-bg text-2xs md:text-sm border-y-1 border-t-black border-b-white overflow-hidden"
>
  <div class="w-full h-full pr-2 overflow-auto custom-scrollbar cs-dark">
    {#await processedCode then htmlString}
      <div id="injected-html" use:lineHlt>
        {@html htmlString}
      </div>
    {/await}
  </div>
</section>

<style>
  .cs-dark::-webkit-scrollbar {
    background: var(--color-kwdr-bg);
  }
  .cs-dark::-webkit-scrollbar-thumb {
    /* background: var(--color-kwdr-fg); */
    background: color-mix(in srgb, var(--color-kwdr-fg) 50%, transparent);
  }

  /*>> :global is to style @html-injected HTML */

  @media screen and (max-width: 768px) {
    #injected-html :global {
      pre [data-line] {
        padding: 0 !important;
      }

      code[data-line-numbers] > [data-line]::before {
        margin-right: 1rem !important;
      }
    }
  }

  #injected-html :global {
    span.line {
      padding: 0 1rem;
    }
    
    /* CSS for line number on the left side of codeblock */
    code {
      counter-reset: step;
      counter-increment: step 0;
    }

    code span.line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: var(--color-kwdr-fg--muted);
    }
    span.highlighted-line {
      background: color-mix(
        in srgb,
        var(--color-kwdr-fg--muted) 25%,
        transparent
      );
    }
  }
</style>
