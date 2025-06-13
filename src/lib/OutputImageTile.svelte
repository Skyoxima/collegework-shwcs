<script lang="ts">
  import { currentProject } from "../state.svelte";
  const { src }: { src: string } = $props();

  function processAlt(src: string) {
    const srcSplits = src.split("/");
    return srcSplits[srcSplits.length - 1];
  }
</script>

<article class={`w-fit p-2 rounded-2xl`} style={`background: ${currentProject.projectBody.bgColors[processAlt(src)]}`}>
  <img {src} alt={processAlt(src)} title={processAlt(src)} class="" />
</article>

<style>
  article {
    box-shadow: 0 4px 2px 0 var(--color-kwdr-bg);
  }
</style>
