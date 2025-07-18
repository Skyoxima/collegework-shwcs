<script lang="ts">
  import { processProjectEntry } from "../auxiliary";
  import { currentProject, currHltdLine } from "../state.svelte";
  import type { ProjectEntryProps, subject, ObjCodebaseItemBody } from "../types";

  let { subjectName, projectName, projectBody }: ProjectEntryProps = $props();

  const handleProjectClick = (
    subject: subject,
    projectName: string,
    projectBody: ObjCodebaseItemBody
  ) => {
    currentProject.subject = subject;
    currentProject.projectName = projectName;
    currentProject.projectBody = projectBody;
    currHltdLine.value = 0;
  };
</script>

<button
  class={[
    "mx-4 block text-2xs/6 lg:text-sm/6 hover:bg-kwdr-fg--muted/50 transition-[background] duration-500 cursor-pointer",
  ]}
  onclick={() => {
    handleProjectClick(subjectName, projectName, projectBody);
  }}
>
  <span
    class={currentProject.projectName === projectName
      ? "border-b-2 border-b-kwdr-bg/25"
      : ""}
  >
    <!-- {projectName} -->
    {processProjectEntry(projectName)}
  </span>
</button>

<style>
</style>
