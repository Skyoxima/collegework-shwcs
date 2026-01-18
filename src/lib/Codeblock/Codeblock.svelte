<!-- A reminder, Svelte <script> code is ran only once on component mounting. Repeatable codes are written inside callbacks for $effect and $derived  -->
<script lang="ts">
  import processCode from "./processShiki";
  import { shikiInstance } from "./processShiki";
  import { lineHlt } from "./lineHltAction.svelte";
  import { onDestroy } from "svelte";
  import { type HighlighterCore } from "shiki";
  import { currentProject } from "../../state.svelte";
  import { getCurrentProjectLangCode } from "../../dal.svelte";
  
  // promise is returned by processCode too, which then goes to the await block and then is shown on screen when resolved
  let processedCode = $state<Promise<string>|null>(null);
  
  // To refer to the singleton highlightercore across files... previously it was creating multiple instances per project click
  let highlighter: HighlighterCore;
  
  // This is how to use await on (almost) top level (previous .then method effectively is the same)
  (async() => {
    highlighter = await shikiInstance();
  })();
  
  //>> processedCode being assigned here is NOT an ANTI PATTERN - https://svelte.dev/docs/svelte/$effect#:~:text=Values%20that%20are%20read%20asynchronously%20%E2%80%94%20after%20an%20await%20or%20inside%20a%20setTimeout%2C%20for%20example%20%E2%80%94%20will%20not%20be%20tracked
  $effect(() => {
    // To avoid race conditions
    const currentProjectID = currentProject.projectDBID;
    
    // this is to avoid error at the very first effect, i.e., the default state where strings are empty.
    if(currentProject.projectDBID !== '') {
      
      // the IIFE async has checks to ensure stale requests (on quick project changes) don't respond, only the latest one do - Claude suggested this
      processedCode = (async () => {
        const projectBody =  await getCurrentProjectLangCode(currentProject.projectDBID);
        
        // 1st check after an await
        if (currentProject.projectDBID !== currentProjectID)
          throw new Error("Stale Project...")
        
        const result = await processCode(projectBody.lang, projectBody.code, highlighter);
        
        // 2nd check after an await
        if (currentProject.projectDBID !== currentProjectID)
          throw new Error("Stale Project...")

        return result;
      })();
    }
  })

  // "Shiki Highlighter Core must be a singleton", on unmounting or remounting the highlightercore used previously is destroyed and new one is instated above
  onDestroy(() => {
    highlighter.dispose();
  });
</script>

<!-- Actions and use: directive go hand-in-hand, and it was a godsent here! -->
<section
  id="code-side"
  class="w-full h-1/3 lg:h-auto p-2 rounded-2xl bg-kwdr-bg text-2xs md:text-sm border-y-1 border-t-black border-b-white overflow-hidden"
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
    @media screen and (max-width: 768px) {
      span.line {
        padding: 0 0.5rem;
      }
      code span.line::before {
        margin-right: 1rem;
        width: 0.5rem;
      }
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
