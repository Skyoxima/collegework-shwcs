<script lang="ts">
  import { currentProject } from "../state.svelte";
  import OutputImageTile from "./OutputImageTile.svelte";
</script>

<article
  class="h-1/2 p-2 rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 overflow-hidden"

>
  <div class="relative w-full h-full p-2 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar">
    {#each currentProject.projectBody.OP_ss_srcs as item}
      <OutputImageTile src={item} />
    {/each}
  </div>
</article>

<style>
</style>
