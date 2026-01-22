<script lang="ts">
  import type { Snippet } from "svelte";

  interface MyErrorProps {
    children: Snippet;
    addnClass?: string
  }

  const { children, addnClass }: MyErrorProps = $props();
</script>

<div class={["absolute-center max-w-1/2 p-1 lg:p-2 bg-red-500/50 border-red-700 border-2", addnClass]}>
  {@render children()}
</div>

<style>

</style>