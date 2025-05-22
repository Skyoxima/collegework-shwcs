<script lang="ts">
  import { currentProject } from "../state.svelte";
  import Comment from "./Comment.svelte";

  
</script>

<article class="w-full h-full flex flex-col p-2.5 gap-2.5 overflow-y-auto rounded-2xl bg-kwdr-fg--muted border-y-1 border-t-kwdr-bg/25 border-b-white/75 custom-scrollbar">
  {#each Object.entries(currentProject.projectBody.comments) as [lineNo, comment]}
    <Comment index={lineNo} {comment} />
  {/each}
</article>

<style>
</style>