<script lang="ts">
  import { getCurrentProjectComments } from "../dal.svelte";

  // import { currentProject } from "../state.svelte";
  import Comment from "./Comment.svelte";
</script>

<article
  class="w-full h-1/2 p-2 rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 overflow-hidden"
>
  <div class="relative w-full h-full p-2 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar">
    {#await getCurrentProjectComments()}
      <div>Loading Comments...</div>
    {:then comments}
      {#each comments as [lineNo, comment]}
        <Comment index={Number(lineNo)} {comment} />
      {:else}
        <div>No items...</div>
      {/each}
    {:catch error}
      <div class="error">{error}</div>
    {/await}
  </div>
</article>

<style>
</style>
