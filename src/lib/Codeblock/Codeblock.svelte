<script lang="ts">
  import processCode from "./processShiki";
  import { shikiInstance } from "./processShiki";
  import { lineHlt } from "./lineHltAction.svelte";
  import { onDestroy } from "svelte";
  import { type HighlighterCore } from "shiki";
  import { currentProject } from "../../state.svelte";
  import { getProjectBody } from "../../dal.svelte";
  
  // promise is returned by processCode too, which then goes to the await block and then is shown on screen when resolved
  let processedCode = $state<Promise<string>>();
  
  // To get the singleton highlightercore... previously it was creating multiple instances per project click
  let highlighter: HighlighterCore;
  shikiInstance().then(res => { highlighter = res });

  $effect(() => {
    // this is to avoid error at the very first effect, i.e., the default state where strings are empty.
    if(currentProject.projectDBID !== '') {
      const projectBody = getProjectBody();
      
      // await is not allowed in effects so .then works
      processedCode = projectBody
        .then(res => processCode(res?.lang, res?.code, highlighter))
    }
  })

  // "Shiki Highlighter Core must be a singleton", hence dispose the unused/previously used (by a previous project's codeblock)
  onDestroy(() => {
    highlighter.dispose();
  });
</script>

<!-- Actions and use: directive go hand-in-hand, and it was a godsent here! -->
<section
  id="code-side"
  class="w-full h-1/3 md:h-auto p-2 rounded-2xl bg-kwdr-bg text-2xs md:text-sm border-y-1 border-t-black border-b-white overflow-hidden"
>
  <div class="size-full relative pr-2 overflow-auto custom-scrollbar cs-dark">
    {#await processedCode} 
      <div class="absolute-center text-kwdr-fg">Making the Codeblock...</div>  
    {:then htmlString}
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
