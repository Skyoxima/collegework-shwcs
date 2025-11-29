<script lang="ts">
  import { currentProject } from "../../state.svelte";
  import { processProjectEntry } from "../../common_auxiliary";
  import { processSemesterName, processSubjectName, isDesktop } from "./ProjectHeaderAux";

  const subjectName = $derived(processSubjectName(currentProject.subject))
  const semester = $derived.by(() => processSemesterName(currentProject.subject))  
</script>


{#snippet headerRevamped()}
  {#if isDesktop()}
    <div class="w-1/3">
      {semester}
    </div>
    <div class="w-1/3 lg:text-center">
      {processProjectEntry(currentProject.projectName)}
    </div>
    <div class="w-1/3 lg:text-right">
      {subjectName}
    </div>

  {:else}
    <div class="text-center">
      {semester} | {subjectName}
    </div>
    <div class="text-center">
      {processProjectEntry(currentProject.projectName)}
    </div>
  {/if}
  
{/snippet}


<div
  class="w-full h-3 lg:h-4.5 lg:px-4 flex justify-center text-2xs lg:text-xs text-kwdr-bg"
>
  <div
    id="header-content"
    class="relative w-3/4 px-4 lg:flex lg:justify-between gap-[10%] bg-kwdr-fg--muted  rounded-b-sm border-b-1 border-b-white/50"
  >
  {@render headerRevamped()}
  </div>
</div>


<style>

  /* Inverted border radii L&R */
  #header-content::before {
    --size: 10px;
    
    content: '';
    position: absolute;
    width: var(--size); height: var(--size);
    top: calc(-1 * var(--size)/2);
    left: calc(-1 * var(--size)/2);
    border-radius: 50%;
    box-shadow: inset calc(-1 * var(--size)/2) calc(var(--size)/2) 0 0 var(--color-kwdr-fg--muted);
    clip-path: inset(50% 0% 0% 0%);
  } #header-content::after {
    --size: 10px;
    
    content: '';
    position: absolute;
    width: var(--size); height: var(--size);
    top: calc(-1 * var(--size) / 2);
    right: calc(-1 * var(--size) / 2);
    border-radius: 50%;
    box-shadow: inset calc(var(--size)/2) calc(var(--size)/2) 0 0 var(--color-kwdr-fg--muted);
    clip-path: inset(50% 0% 0% 0%);
  }
</style>