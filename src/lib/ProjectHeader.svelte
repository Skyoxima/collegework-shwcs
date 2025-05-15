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
  id="project-title"
  class="mb-2.5 p-4 bg-kwdr-bg rounded-2xl h-[8vh] flex justify-center items-center gap-[5%]"
>
  <p class=" w-3/10 text-md text-kwdr-fg">
    {subjectName}
  </p>
  <p class="text-center w-3/10 text-md text-kwdr-fg">
    {currentProject.projectName}
  </p>
  <p class="text-right w-3/10 text-md text-kwdr-fg">
    {semester}
  </p>
</div>