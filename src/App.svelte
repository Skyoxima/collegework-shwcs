<script lang="ts">
  import Header from "./lib/Header.svelte";
  import MainLayout from "./lib/MainLayout.svelte";
  import LeftSheet from "./lib/LeftSheet.svelte";
  import About from "./lib/About.svelte";
  import OutputImgModal from "./lib/OutputImgModal.svelte";
  import RightSheet from "./lib/RightSheet.svelte";

</script>

<main>
  <Header />
  <About />
  <MainLayout />
  <LeftSheet />
  <OutputImgModal />
  <RightSheet />
</main>