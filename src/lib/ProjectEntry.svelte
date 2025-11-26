<script lang="ts">
  import { processProjectEntry } from "../auxiliary";
  import { currentProject } from "../state.svelte";
  // import { currentProject, currHltdLine } from "../state.svelte";
  import type { ProjectEntryProps } from "../types";

  let { projectID, projectName, clickHandler }: ProjectEntryProps = $props();

</script>

<button
  class={[
    "mx-4 block text-2xs/6 lg:text-sm/6 hover:bg-kwdr-fg--muted/50 transition-[background] duration-500 cursor-pointer",
  ]}
  onclick={() => {
    clickHandler(projectID, projectName);
  }}
>
  <span>
    {projectName}
    <!-- {processProjectEntry(projectName)} -->
  </span>
</button>

<style>
</style>
