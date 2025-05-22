<script lang="ts">
  import { currentProject } from "../state.svelte";
  import { subjectFullnames } from "../constants";

  const subjectName = $derived(subjectFullnames[currentProject.subject.split("-")[1]])
  const semester = $derived.by(() => {
    const semesterFull = currentProject.subject.split('-')[0].split('_')
    return `${semesterFull[0]}ester-${semesterFull[1]}`
  })
  
</script>

<div
  id="project-header"
  class="relative w-3/4 left-1/2 -translate-x-1/2 px-4 flex justify-center items-center gap-[5%] bg-kwdr-fg--muted text-xs text-kwdr-bg rounded-b-sm border-b-1 border-b-white/50"
>
  <p class=" w-3/10 text-md">
    {subjectName}
  </p>
  <p class="text-center w-3/10 text-md">
    {currentProject.projectName}
  </p>
  <p class="text-right w-3/10 text-md">
    {semester}
  </p>
</div>

<style>
  #project-header::before {
    --size: 16px;
    
    content: '';
    position: absolute;
    width: var(--size); height: var(--size);
    top: calc(-1 * var(--size)/2);
    left: calc(-1 * var(--size)/2);
    border-radius: 50%;
    box-shadow: inset calc(-1 * var(--size)/2) calc(var(--size)/2) 0 0 var(--color-kwdr-fg--muted);
    clip-path: inset(50% 0% 0% 0%);
  }
  #project-header::after {
    --size: 16px;
    
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