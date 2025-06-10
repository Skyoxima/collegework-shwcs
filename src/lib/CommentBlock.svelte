<script lang="ts">
  import { currentProject } from "../state.svelte";
  import Comment from "./Comment.svelte";
</script>

<article
  class="w-full h-1/2 p-2 rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75"
>
  <div class="relative w-full h-full p-2 flex flex-col gap-2.5 overflow-y-auto custom-scrollbar">
    {#each Object.entries(currentProject.projectBody.comments) as [lineNo, comment]}
      <Comment index={lineNo} {comment} />
    {/each}
  </div>
</article>

<style>
</style>
