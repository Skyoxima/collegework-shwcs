<script lang="ts">
  import type { Snippet } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";

  type HeroButtonProps = {
    body: Snippet,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
    addnClass?: string;
  }

  const { body, clickHandler, addnClass }: HeroButtonProps = $props();
</script>

<button class={["hero-btn playwrite-light-sm lg:playwrite-light-lg", addnClass]} onclick={clickHandler}>
  {@render body()}
</button>

<style>

</style>