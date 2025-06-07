<script lang="ts">
  import { currentProject } from "../state.svelte";
  import ImageTile from "./OutputImageTile.svelte";
</script>

<article
  class="h-1/2 p-2.5 gap-2.5 overflow-y-auto rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 custom-scrollbar"
>
  <div class="flex flex-col gap-2.5">
    {#each currentProject.projectBody.OP_ss_srcs as item}
      <ImageTile src={item} />
    {/each}
  </div>
</article>

<style>
</style>
