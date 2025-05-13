<script lang="ts">
  import { unified } from "unified";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import rehypePrettyCode from "rehype-pretty-code";
  import rehypeStringify from "rehype-stringify";
  import { currentProject } from "../state.svelte";

  async function processCode(lang: string, codeString: string) {
    const markdown = "```" + lang + "\n" + codeString;

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
  }
</style>