<script lang="ts">
  import Header from "./lib/Header.svelte";
  import MainLayout from "./lib/MainLayout.svelte";
  import LeftSheet from "./lib/LeftSheet.svelte";
  import OutputImgModal from "./lib/OutputImgModal.svelte";
  import RightSheet from "./lib/RightSheet.svelte";
  import AboutDelegator from "./lib/AboutBook/AboutDelegator.svelte";

</script>

<main>
  <Header />
  <AboutDelegator />
  <MainLayout />
  <LeftSheet />
  <OutputImgModal />
  <RightSheet />
</main>