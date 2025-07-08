<script lang="ts">
  import { screenChange } from "../../state.svelte";
  import About from "../About.svelte";
  import AboutMobile from "./AboutMobile.svelte";

  window.addEventListener('resize', (e) => {
    console.log('Window was resized');
    screenChange.value = (e.currentTarget as Window).innerWidth;

  });

</script>

{#if screenChange.value <= 1024}
  <AboutMobile />
{:else}
  <About />
{/if}
