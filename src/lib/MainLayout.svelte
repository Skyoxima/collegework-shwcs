<script lang="ts">
  import Codeblock from "./Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import ProjectHeader from "./ProjectHeader.svelte";

</script>

<main class="w-full h-[90vh] px-8 py-[5vh] p-2.5">
  <section class="w-full h-full">
    <ProjectHeader />    

    <!-- Main Split -->
    <div class="w-full h-[72vh] flex gap-2.5">
      <Codeblock />
      <CommentBlock />
    </div>
  </section>
</main>

<style>
</style>