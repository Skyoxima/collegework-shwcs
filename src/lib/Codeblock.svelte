<script lang="ts">
  import { unified } from "unified";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import rehypePrettyCode from "rehype-pretty-code";
  import rehypeStringify from "rehype-stringify";
  import { currHltdLine, currentProject } from "../state.svelte";
  import type { Action } from "svelte/action";  

  // $inspect(currHltdLine);
  // $inspect(currentProject);


  async function processCode(lang: string, codeString: string) {
    const markdown = "```" + lang + " showLineNumbers" + "\n" + codeString;

    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        theme: 'kanagawa-dragon'
      })
      .use(rehypeStringify)
      .process(markdown);
    
    // console.log("processCode ran")
    return file.toString();
  }
  
  // using derived here is the correct approach. A pure function is returning the same O/P for the same I/P (I/P's state is changing elsewhere, not here)
  let processedCode = $derived(processCode(
    currentProject.projectBody.lang,
    currentProject.projectBody.code_string_literal
  ));


  const lineHlt: Action = (node: HTMLElement) => {
    //? Should I use an effect, because I do want to make the block inside reactive to currrentHltdLine.
    $effect(() => {
      // When there indeed is some line to highlight
      if (currHltdLine.value > 0) {
        const allLines = node.querySelectorAll('[data-line]');
        // remove existing highlights first 
        allLines.forEach((ele) => {
          ele.classList.remove('highlighted-line')
        })
        allLines[currHltdLine.value - 1].classList.add('highlighted-line');
      }
    })
  }
</script>

<section id="code-side" class="w-full py-2 px-4 rounded-2xl bg-kwdr-bg text-sm overflow-auto custom-scrollbar">
  {#await processedCode then htmlString}
  <div use:lineHlt>
    {@html htmlString}
  </div>
  {/await}
</section>

<style>
  /* This is the way to style @html injected HTML */
  div :global {
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
      background: color-mix(in srgb, var(--color-kwdr-fg--muted) 25%, transparent);
    }
  }
</style>