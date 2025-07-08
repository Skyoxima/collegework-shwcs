<script lang="ts">
  import { showAboutModal } from "../../state.svelte";
  import AboutPageMobile from "./AboutPageMobile.svelte";
  import {
    titlePage,
    frontpage1,
    frontpage2,
    frontpage2ex,
    frontpage3,
    backpage1,
    backpage2,
    backpage3,
    backpage3ex,
  } from "../AboutBook/AboutPageSnippets.svelte";
  import { noofAboutPages, noofAboutPagesMobile } from "../../constants";
  import ModalClose from "../ModalClose.svelte";

  let dialogRef: HTMLDialogElement | undefined = $state(undefined);
  let flipCount = $state(0);

  // It's a bit convoluted for handling modals because showModal is necessary to properly activate the element, whereas in LeftSheet it was okay to just use CSS...
  // and the state was used inside the component definition whereas here a HeaderButton needs to activate this component, so an external state is warranted.
  $effect(() => {
    if (showAboutModal.value) {
      dialogRef?.showModal();
    }
  });
</script>

<dialog
  class="w-9/10 h-9/10 p-4 absolute top-1/2 left-1/2 -translate-1/2 bg-transparent rounded-2xl overflow-hidden"
  bind:this={dialogRef}
  onclose={() => {
    flipCount = 0;
    showAboutModal.value = false;
  }}
>
  <button
    id="abt-btn"
    class="relative h-95/100 w-full left-1/2 -translate-x-1/2 transition-transform duration-500 cursor-pointer"
    onclick={(e) => {
      flipCount = (flipCount + 1) % (noofAboutPagesMobile);
    }}
  >
  <!--! ↑↑ 1 less here so that the flipbook doesn't fully close like it does in desktop version, cause it is out-of-bounds -->
    <AboutPageMobile key={9} {flipCount} frontpage={frontpage3} />
    <AboutPageMobile key={8} {flipCount} frontpage={backpage3} />
    <AboutPageMobile
      key={7}
      {flipCount}
      frontpage={frontpage2ex}
    />
    <AboutPageMobile
      key={6}
      {flipCount}
      frontpage={backpage3ex}
    />
    <AboutPageMobile
      key={5}
      {flipCount}
      frontpage={frontpage2}
    />
    <AboutPageMobile
      key={4}
      {flipCount}
      frontpage={backpage2}
    />
    <AboutPageMobile
      key={3}
      {flipCount}
      frontpage={frontpage1}
    />
    <AboutPageMobile key={2} {flipCount} frontpage={backpage1} />
    <AboutPageMobile key={1} {flipCount} frontpage={titlePage} />
  </button>

  <ModalClose 
    {dialogRef} 
    className="relative mt-[2%] left-1/2 -translate-x-1/2 px-8 py-4 rounded-lg bg-kwdr-bg" 
    addnClass="size-3 lg:size-6 top-1/2 left-1/2 -translate-1/2 [&_path]:fill-kwdr-fg" 
  />
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 75%, transparent);
    /* background: color-mix(in srgb, black 100%, transparent); */
  }

  #abt-btn {
    outline: none;
  }
</style>