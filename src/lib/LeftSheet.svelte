<script lang="ts">
  import { CodebaseEntries } from "../state.svelte";
  import ProjectEntry from "./ProjectEntry.svelte";
  import RightArrow from "./SVGAsComponent/RightArrow.svelte";
  import { fade } from "svelte/transition";
  import { processSubjectName, processSemesterName } from "../auxiliary";

  let sheetMode = $state(false);
</script>

<aside
  id="left-sheet-wrapper"
  class={[
    "fixed top-0 w-[80%] md:w-[40%] h-[100lvh] transition-[left] duration-[500ms]",
    sheetMode ? "left-0" : "-left-8/10 md:-left-[40%]",
  ]}
>
  <div
    id="left-sheet"
    class="w-full h-full bg-kwdr-fg border-r-4 border-r-kwdr-fg--muted overflow-y-auto custom-scrollbar"
  >
  {#if sheetMode}
  <div out:fade={{ delay: 250, duration: 500 }}>
        <h2
          class="p-2 sticky top-0 bg-kwdr-fg--muted text-lg md:text-2xl text-kwdr-bg"
        >
          Subjects
        </h2>
        {#each CodebaseEntries as [subjectName, codeItem]}
          <article>
            <h2 class="text-sm md:text-base subject px-2">
              {processSubjectName(subjectName)}
            </h2>
            {#each Object.entries(codeItem) as [projectName, projectBody]}
              <ProjectEntry {subjectName} {projectName} {projectBody} />
            {/each}
          </article>
        {/each}
      </div>
    {/if}
  </div>

  <button
    class="absolute top-1/2 -translate-y-1/2 left-full w-10 aspect-[2/3] bg-kwdr-fg--muted flex justify-center items-center rounded-r-full border-r-2 border-kwdr-bg/50 cursor-pointer"
    onclick={() => {
      sheetMode = !sheetMode;
    }}
  >
    <RightArrow className={sheetMode ? "rotate-180" : ""} />
  </button>
</aside>

<style>
  .subject {
    background: color-mix(
      in srgb,
      var(--color-kwdr-fg--muted) 50%,
      transparent
    );
  }
</style>