<script lang="ts">
  import { currentProject, currHltdLine } from "../state.svelte";
  import type { ProjectEntryProps, subject, ObjCodebaseBody } from "../types";

  let { subjectName, projectName, projectBody }: ProjectEntryProps = $props();

  const handleProjectClick = (
    subject: subject,
    projectName: string,
    projectBody: ObjCodebaseBody
  ) => {
    currentProject.subject = subject;
    currentProject.projectName = projectName;
    currentProject.projectBody = projectBody;
    currHltdLine.value = 0;
  };
</script>

<button
  class={[
    "mx-4 block text-sm/6 hover:bg-kwdr-fg--muted/50 transition-[background] duration-500 cursor-pointer",
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
    {projectName}
  </span>
</button>

<style>
</style>
