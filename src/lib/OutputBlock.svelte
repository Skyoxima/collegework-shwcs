<script lang="ts">
  import { currentProject } from "../state.svelte";
  import OutputImageTile from "./OutputImageTile.svelte";
</script>

<article
  class="h-1/2 p-2 rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 overflow-hidden"

>
  <div class={["relative w-full h-full p-2 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar", currentProject.projectBody.outputSrcs.length > 5 ? "grid grid-cols-2": '']}>
    {#each currentProject.projectBody.outputSrcs as item}
      <OutputImageTile src={item} />
    {:else}
      <div>No items...</div>
    {/each}
  </div>
</article>

<style>
</style>
