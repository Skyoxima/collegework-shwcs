<script lang="ts">
  import { unified } from "unified";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import rehypePrettyCode from "rehype-pretty-code";
  import rehypeStringify from "rehype-stringify";
  import { currHltdLine, currentProject } from "../state.svelte";
  import type { Action } from "svelte/action";

  async function processCode(lang: string, codeString: string) {
    const markdown = "```" + lang + " showLineNumbers" + "\n" + codeString;

    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        theme: "kanagawa-dragon",
      })
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

  const lineHlt: Action = (node: HTMLElement) => {
    $effect(() => {
      // When there indeed is some line to highlight
      if (currHltdLine.value > 0) {
        const allLines = node.querySelectorAll("[data-line]");
        // remove existing highlights first
        allLines.forEach((ele) => {
          ele.classList.remove("highlighted-line");
        });

        // now apply/update the highlight
        const hltLine = allLines[currHltdLine.value - 1] as HTMLSpanElement;
        hltLine.classList.add("highlighted-line");

        // scrolling to the line being highlighted
        hltLine.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
      }
    });
  };
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
    pre [data-line] {
      padding: 0 1rem;
    }

    /* This is for line numbers */
    code[data-line-numbers] {
      counter-reset: line;
    }

    code[data-line-numbers] > [data-line]::before {
      counter-increment: line;
      content: counter(line);

      display: inline-block;
      width: 0.75rem;
      margin-right: 2rem;
      text-align: right;
      color: gray;
    }

    code[data-line-numbers-max-digits="2"] > [data-line]::before {
      width: 1.25rem;
    }

    code[data-line-numbers-max-digits="3"] > [data-line]::before {
      width: 1.75rem;
    }

    code[data-line-numbers-max-digits="4"] > [data-line]::before {
      width: 2.25rem;
    }
    /* Line number styling ends here. */

    span.highlighted-line {
      background: color-mix(
        in srgb,
        var(--color-kwdr-fg--muted) 25%,
        transparent
      );
    }
  }
</style>
