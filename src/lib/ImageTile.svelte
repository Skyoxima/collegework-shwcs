<script lang="ts">
  const {src}: {src: string} = $props();

  function processAlt(src: string) {
    const srcSplits = src.split("/")
    return srcSplits[srcSplits.length - 1];
  }
</script>

<article class="w-fit p-2 bg-kwdr-bg border-t-2 border-t-kwdr-fg  rounded-2xl">
  <img src={src} alt={processAlt(src)} class="rounded-lg" />  
</article>

<style>
</style>