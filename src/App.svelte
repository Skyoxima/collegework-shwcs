<script lang="ts">
  import MainLayout from "./lib/MainLayout.svelte";
  import OutputImgModal from "./lib/OutputImgModal.svelte";
  import RightSheet from "./lib/RightSheet.svelte";
  import AboutDelegator from "./lib/AboutBook/AboutDelegator.svelte";
  import Hero from "./lib/Hero/Hero.svelte";
  import { screenChange } from "./state.svelte";
  import { onDestroy } from "svelte";

  const resizeHandler = (e: Event) => {
    console.log('Window was resized');
    screenChange.value = (e.currentTarget as Window).innerWidth;
  }

  window.addEventListener('resize', resizeHandler);

  onDestroy(() => {
    window.removeEventListener('resize', resizeHandler)
  })
  
</script>

<main class="relative">
  <Hero />
  <AboutDelegator />
  <MainLayout />
  <OutputImgModal />
  <RightSheet />
</main>