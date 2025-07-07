<script lang="ts">
  import { showAboutModal } from "../state.svelte";
  import AboutPage from "./AboutBook/AboutPage.svelte";
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
  } from "./AboutBook/AboutPageSnippets.svelte";
  import { noofAboutPages } from "../constants";

  let dialogRef: HTMLDialogElement | undefined = $state(undefined);
  let flipCount = $state(3);

  $inspect(flipCount);

  // It's a bit convoluted for handling modals because showModal is necessary to properly activate the element, whereas in LeftSheet it was okay to just use CSS...
  // and the state was used inside the component definition whereas here a HeaderButton needs to activate this component, so an external state is warranted.
  $effect(() => {
    if (showAboutModal.value) {
      dialogRef?.showModal();
    }
  });
</script>

<dialog
  class="w-9/10 h-9/10 p-4 absolute top-1/2 left-1/2 -translate-1/2 flex-center bg-transparent rounded-2xl overflow-hidden"
  bind:this={dialogRef}
  onclose={() => (showAboutModal.value = false)}
>
  <button
    id="abt-btn"
    class="relative w-1/2 h-full flex-center transition-transform duration-500 cursor-pointer"
    onclick={(e) => {
      flipCount = (flipCount + 1) % (noofAboutPages + 1);
    }}
  >
    <AboutPage key={5} {flipCount} frontpage={frontpage3} />
    <AboutPage
      key={4}
      {flipCount}
      frontpage={frontpage2ex}
      backpage={backpage3}
    />
    <AboutPage
      key={3}
      {flipCount}
      frontpage={frontpage2}
      backpage={backpage3ex}
    />
    <AboutPage
      key={2}
      {flipCount}
      frontpage={frontpage1}
      backpage={backpage2}
    />
    <AboutPage key={1} {flipCount} frontpage={titlePage} backpage={backpage1} />
  </button>
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 75%, transparent);
  }

  #abt-btn {
    outline: none;
  }
</style>
