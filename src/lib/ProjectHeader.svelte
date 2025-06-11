<script lang="ts">
  import { currentProject } from "../state.svelte";
  import { subjectFullnames } from "../constants";

  const subjectName = $derived(subjectFullnames[currentProject.subject.split("-")[1]])
  const semester = $derived.by(() => {
    const semesterFull = currentProject.subject.split('-')[0].split('_')
    return `${semesterFull[0]}ester-${semesterFull[1]}`
  })
  
  const isDesktop = () => {
    return window.matchMedia('screen and (width >= 64rem)').matches;
  }
</script>


{#snippet headerText(text: string, className?: string)}
  <p class={['px-2', className]}>{text}</p>
{/snippet}

{#snippet headerRevamped()}

  {#if isDesktop()}
    <div class="w-1/3">
      {semester}
    </div>
    <div class="w-1/3 lg:text-center">
      {currentProject.projectName}
    </div>
    <div class="w-1/3 lg:text-right">
      {subjectName}
    </div>

  {:else}
    <div class="text-center">
      {semester} | {subjectName}
    </div>
    <div class="text-center">
      {currentProject.projectName}
    </div>
  {/if}
  
{/snippet}

<div
  class="w-full lg:px-4 flex justify-center text-2xs lg:text-xs text-kwdr-bg"
>
  <div
    id="header-content"
    class="relative w-3/4 px-4 lg:flex lg:justify-between gap-[10%] bg-kwdr-fg--muted  rounded-b-sm border-b-1 border-b-white/50"
  >
  {@render headerRevamped()}
  </div>
</div>

<style>
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
  }
  #header-content::after {
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