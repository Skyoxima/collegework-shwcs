<script lang="ts">
  import { processProjectEntry } from "../common_auxiliary";
  import type { ProjectEntryProps } from "../types";
  import { currentProject } from "../state.svelte";
  let { subject, projectID, projectName, clickHandler }: ProjectEntryProps = $props();

</script>

<button
  class={[
    "mx-4 block text-2xs/6 lg:text-sm/6 hover:bg-kwdr-fg--muted/50 transition-[background] duration-500 cursor-pointer",
  , currentProject.projectDBID === projectID ? 'border-b-2' : '']}
  onclick={() => {
    clickHandler(projectID, projectName, subject);
  }}
>
  <span>
    {processProjectEntry(projectName)}
  </span>
</button>

<style>
</style>
