<script lang="ts">
  import { onDestroy } from "svelte";
  import { screenChange } from "../../state.svelte";
  import About from "../About/About.svelte";
  import AboutMobile from "./AboutMobile.svelte";

  
</script>

{#if screenChange.value < 1024}
  <AboutMobile />
{:else}
  <About />
{/if}
