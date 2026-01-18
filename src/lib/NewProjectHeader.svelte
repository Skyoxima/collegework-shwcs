<script lang="ts">
  import ChevronLeft from "./SVGC/LeftIcon.svelte";
  import ChevronRight from "./SVGC/RightIcon.svelte";
  import { currentProject } from "../state.svelte";
  import { processProjectEntry } from "../common_auxiliary";
</script>

<section class="sticky top-0 z-100 gradient-bg lg:static w-full max-h-[25dvh] lg:max-h-[15vh] p-2 mb-4 text-xl lg:text-4xl flex justify-between items-center">
  <ChevronLeft class="[&_*]:fill-kwdr-bg/25"/>
  <p class="playwrite-light-sm md:playwrite-light-base lg:playwrite-light-lg">{processProjectEntry(currentProject.projectName)}</p>
  <ChevronRight class="[&_*]:fill-kwdr-bg/25"/>
</section>

<style>
  .gradient-bg {
    background-image: linear-gradient(to bottom, var(--color-kwdr-fg) 0% 40%, transparent 75% 100%);
  }
</style>