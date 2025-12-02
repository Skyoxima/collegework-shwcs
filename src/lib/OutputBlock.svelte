<script lang="ts">
  import { getCurrentProjectOPImgs } from "../dal.svelte";
  import { currentProject } from "../state.svelte";
  import OutputImageTile from "./OutputImageTile.svelte";  
</script>

<article
  class="h-1/2 p-2 rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 overflow-hidden"
>
{#if currentProject.projectDBID !== ''}
  {#await getCurrentProjectOPImgs(currentProject.projectDBID)}
    <div>Loading Output Images...</div>
  {:then value}
    {@const entries = Object.entries(value)}
    <div class={["relative w-full h-full p-2 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar", entries.length > 5 ? "grid grid-cols-2": '']}>
      {#each entries as [src, bgColor]}
        <OutputImageTile {src} {bgColor} />
      {:else}
        <div>No items...</div>
      {/each}
    </div>
  {:catch error}
    <div>{error}</div>
  {/await}
{/if}
</article>

<style>
</style>
