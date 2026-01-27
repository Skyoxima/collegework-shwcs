<script lang="ts" module>
  import LogoVector from '../SVGAsComponent/LogoVector.svelte';
  import { fade } from 'svelte/transition';

  export {
    backpage1,
    backpage2,
    backpage3,
    backpage3ex
  };
</script>

{#snippet bgLogoVector()}
  <LogoVector 
    className="w-[calc(100%-2rem)] h-auto max-h-[calc(100%-1rem)] 
    absolute -translate-1/2 top-1/2 left-1/2 
    [&_path]:stroke-white/25 lg:[&_path]:stroke-black [&_path]:stroke-[0.25]" />
{/snippet}

<!-- The if statement is only used to apply the delay correctly when the last page is flipped and the stacking order is reset -->
<!-- I think I couldn't have done it with in: without also using the same if, readers won't take a set amount of time and in: works based on knowing the incoming time -->
{#snippet backpage1(flipCount: number)}
  {#if flipCount === 1}
    {@render bgLogoVector()}
    <div
      class="relative size-full flex-center playwrite-reg-2xl md:playwrite-reg-3xl"
      out:fade={{ delay: 250 }}
    >
      Motive
    </div>
  {/if}
{/snippet}

{#snippet backpage2()}
  {@render bgLogoVector()}
  <div
    class="relative size-full flex-center playwrite-reg-2xl md:playwrite-reg-3xl"
  >
    Structure Ⅰ
  </div>
{/snippet}

{#snippet backpage3ex()}
  {@render bgLogoVector()}
  <div
    class="relative size-full flex-center playwrite-reg-2xl md:playwrite-reg-3xl"
  >
    Structure ⅠⅠ
  </div>
{/snippet}

{#snippet backpage3()}
  {@render bgLogoVector()}
  <div
    class="relative size-full flex-center playwrite-reg-2xl md:playwrite-reg-3xl"
  >
    Specifications
  </div>
{/snippet}

<style>

</style>