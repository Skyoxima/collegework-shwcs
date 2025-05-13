<script lang="ts">
  import { unified } from "unified";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import rehypePrettyCode from "rehype-pretty-code";
  import rehypeStringify from "rehype-stringify";
  import { currentProject } from "../state.svelte";

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

    
    return file.toString();
  }
  
  // using derived here is the correct approach. A pure function is returning the same O/P for the same I/P (I/P's state is changing elsewhere, not here)
  let processedCode = $derived(processCode(
    currentProject.projectBody.lang,
    currentProject.projectBody.code_string_literal
  ));
</script>

<section id="code-side" class="w-full py-2 px-4 rounded-2xl bg-kwdr-bg text-sm overflow-auto custom-scrollbar">
  {#await processedCode then htmlString}
  <div>
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
  }
</style>