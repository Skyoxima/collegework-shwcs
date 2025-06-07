<script lang="ts">
  import { currentProject } from "../state.svelte";
  import { subjectFullnames } from "../constants";

  const subjectName = $derived(subjectFullnames[currentProject.subject.split("-")[1]])
  const semester = $derived.by(() => {
    const semesterFull = currentProject.subject.split('-')[0].split('_')
    return `${semesterFull[0]}ester-${semesterFull[1]}`
  })
  
</script>


{#snippet headerText(text: string, className?: string)}
  <p class={['px-2 w-1/2', className]}>{text}</p>
{/snippet}

{#snippet headerAllScreens()}
<div class="w-full flex flex-col lg:flex-row lg:justify-between">
  <div class="flex lg:justify-between w-full lg:w-6/10">
    {@render headerText(subjectName, 'text-left')}
    {@render headerText(semester, 'text-right')}
  </div>
  {@render headerText(currentProject.projectName, 'w-full text-center lg:w-3/10 lg:text-right')}
</div>
{/snippet}

<div
  id="project-header"
  class="relative w-3/4 left-1/2 -translate-x-1/2 px-0 lg:px-4 flex flex-col lg:flex-row gap-[5%] bg-kwdr-fg--muted text-2xs lg:text-xs text-kwdr-bg rounded-b-sm border-b-1 border-b-white/50"
>
  {@render headerAllScreens()}
</div>

<style>
  #project-header::before {
    --size: 10px;
    
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