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
  
  let processedCode = $derived(processCode(
    currentProject.projectBody.lang, 
    currentProject.projectBody.code_string_literal
  ));
</script>

{#await processedCode then htmlString}
<div>
  {@html htmlString}
</div>
{/await}

<style>
  /* This is the way to style @html injected HTML */
  div :global {
    pre [data-line] {
      padding: 0 1rem;
    }
  }
</style>