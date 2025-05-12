<script lang="ts">
  import Comment from "./Comment.svelte";
  import { currentProject } from "../state.svelte";
  import Codeblock from "./Codeblock.svelte";
  $inspect(currentProject).with(console.log)
  
  //TODO: Add a function to process the subject name and project names, make them more natural languaged


</script>

<section id="main" class="w-full h-[90vh] px-8 py-[5vh]">
  <main class="w-full h-full">
    <!-- Project Title -->
    <div id="main-title" class="w-[calc(100%-20px)] relative left-[10px] bg-kwdr-bg rounded-2xl h-[8vh]">
      <p class="text-center relative top-1/2 -translate-y-1/2 text-md text-kwdr-fg">{currentProject.subject}--{currentProject.projectName}</p>
    </div>
    <!-- Main Split -->
    <div class="w-full h-[72vh] p-2.5 flex gap-2.5">
      <div id="code-side" class="w-full py-2 px-4 rounded-2xl bg-kwdr-bg text-sm overflow-auto custom-scrollbar">
        <Codeblock />
      </div>
      <div id="comments-side" class="w-full flex flex-col p-2.5 gap-2.5 overflow-y-auto rounded-2xl bg-kwdr-fg--muted custom-scrollbar">
        {#each Object.entries(currentProject.projectBody.comments) as [lineNo, comment]}
          <Comment index={lineNo} {comment} />
        {/each}
      </div>
    </div>
  </main>
</section>

<style>
</style>