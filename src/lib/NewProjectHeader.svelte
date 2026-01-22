<script lang="ts">
  //>> IDEA: Can have control icons (see Left and Right in the project's dir. to goto previous and next projects)
  import { processSemesterName, processSubjectName } from "./ProjectHeader/ProjectHeaderAux";
  import { currentProject, screenChange } from "../state.svelte";
  import { processProjectEntry } from "../common_auxiliary";
  
</script>

{#if screenChange.value >= 1024}
  <section 
    class="relative bg-kwdr-fg w-full max-h-[15vh] p-2 mb-4 flex justify-between items-end">
    <!-- These 2 are "overlayed" with the main title to keep the main one in center and these ones on edges, plain justify-between doesn't work -->
    <div class="absolute w-full flex justify-between">
      <p class="lg:playwrite-light-base">{processSemesterName(currentProject.subject)}</p>
      <p class="text-right lg:playwrite-light-base">{processSubjectName(currentProject.subject)}</p>
    </div>
    <p class="w-full text-center lg:playwrite-reg-xl">{processProjectEntry(currentProject.projectName)}</p>
  </section>
{:else}
  <section 
    class="sticky top-0 z-99 bg-kwdr-fg w-full max-h-[25dvh] p-1 mb-2 text-center">
    <div class="w-full flex justify-center gap-2 md:gap-4">
      <p class="playwrite-light-2xs md:playwrite-light-sm">{processSemesterName(currentProject.subject)}</p>
      <p class="playwrite-light-2xs md:playwrite-light-sm text-right">{processSubjectName(currentProject.subject)}</p>
    </div>
    <p class="mt-2 playwrite-reg-xs/relaxed md:playwrite-reg-base">{processProjectEntry(currentProject.projectName)}</p>
  </section>
  
{/if}

<style>
</style>