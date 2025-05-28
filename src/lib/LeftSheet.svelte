<script lang="ts">
  import { currentProject, CodebaseEntries, currHltdLine } from '../state.svelte';
  import type { ObjCodebaseBody, subject } from '../types';
  import RightArrow from './SVGAsComponent/RightArrow.svelte';
  import { fade } from 'svelte/transition';

  let sheetMode = $state(false);

  const handleProjectClick = (subject: subject, projectName: string, projectBody: ObjCodebaseBody) => {
    currentProject.subject = subject;
    currentProject.projectName = projectName;
    currentProject.projectBody = projectBody;
    currHltdLine.value = 0;
  }
</script>


<aside id="left-sheet-wrapper" class={["fixed top-0 w-[40%] h-full transition-[left] duration-[500ms]", sheetMode ? 'left-0' : '-left-[40%]']}>
  <div id="left-sheet" class="w-full h-full bg-kwdr-fg border-r-4 border-r-kwdr-fg--muted overflow-y-scroll custom-scrollbar">
    {#if sheetMode}
    <div out:fade={{delay: 250, duration: 500}}>
      <h2 class="p-2 sticky top-0 bg-kwdr-fg--muted text-2xl text-kwdr-bg">Subjects</h2>
      {#each CodebaseEntries as [subjectName, codeItem]}
      <article>
        <h2 class="subject px-2">{subjectName}</h2>
        {#each Object.entries(codeItem) as [projectName, projectBody]}
        <button class={["mx-2 block hover:bg-kwdr-fg--muted/50 transition-[background] duration-500 cursor-pointer", currentProject.projectName === projectName ? "border-b-2 border-b-kwdr-bg/25" : ""]} onclick={() => {handleProjectClick(subjectName, projectName, projectBody)}}>&nbsp;{projectName}&nbsp;</button>
        {/each}
      </article>
      {/each}
    </div>
    {/if}
    </div>

  <button id="left-sheet-ctrl" class="absolute top-1/2 -translate-y-1/2 left-full w-10 aspect-[2/3] bg-kwdr-fg--muted flex justify-center items-center rounded-r-full cursor-pointer" onclick={() => {sheetMode = !sheetMode}}>
    <RightArrow className={sheetMode ? 'rotate-180' : ''} />
  </button>
</aside>

<style>
  .subject {
    background: color-mix(in srgb, var(--color-kwdr-fg--muted) 50%, transparent);
  }
</style>