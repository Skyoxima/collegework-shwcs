<script lang="ts">
  import { currentProject, currentImage } from "../state.svelte";
  import { processAlt } from "../auxiliary";
  const { src }: { src: string } = $props();

  
</script>

<button 
  class="w-fit p-2 rounded-2xl cursor-pointer"
  style={`background: ${currentProject.projectBody.bgColors[processAlt(src)]}`}
  onclick={() => {currentImage.src = src}}
  >
  <img 
    {src} 
    alt={processAlt(src)} 
    title={processAlt(src)} 
    class="" 
  />
</button>

<style>
  button {
    box-shadow: 0 4px 2px 0 var(--color-kwdr-bg);
  }
</style>
