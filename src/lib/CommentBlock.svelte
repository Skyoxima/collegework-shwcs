<script lang="ts">
  import { currentProject } from "../state.svelte";
  import Comment from "./Comment.svelte";

  
</script>

<section id="comments-side" class="w-full flex flex-col p-2.5 gap-2.5 overflow-y-auto rounded-2xl bg-kwdr-fg--muted custom-scrollbar">
  {#each Object.entries(currentProject.projectBody.comments) as [lineNo, comment]}
    <Comment index={lineNo} {comment} />
  {/each}
</section>

<style>
</style>