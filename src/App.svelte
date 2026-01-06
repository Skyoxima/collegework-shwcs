<script lang="ts">
  import Header from "./lib/Header.svelte";
  import MainLayout from "./lib/MainLayout.svelte";
  import LeftSheet from "./lib/LeftSheet.svelte";
  import OutputImgModal from "./lib/OutputImgModal.svelte";
  import RightSheet from "./lib/RightSheet.svelte";
  import AboutDelegator from "./lib/AboutBook/AboutDelegator.svelte";
  import Hero from "./lib/Hero.svelte";
</script>

<main class="relative">
  <Header />
  <Hero />
  <AboutDelegator />
  <MainLayout />
  <!-- <LeftSheet /> -->
  <OutputImgModal />
  <RightSheet />
</main>