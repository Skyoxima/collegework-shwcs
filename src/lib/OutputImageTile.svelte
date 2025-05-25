<script lang="ts">
  const {src}: {src: string} = $props();

  function processAlt(src: string) {
    const srcSplits = src.split("/")
    return srcSplits[srcSplits.length - 1];
  }
</script>

<article class="w-fit p-2 bg-kwdr-bg rounded-2xl">
  <img src={src} alt={processAlt(src)} class="rounded-lg" />  
</article>

<style>
  article {
    box-shadow: 0 4px 2px 0 var(--color-kwdr-bg);
  }
</style>