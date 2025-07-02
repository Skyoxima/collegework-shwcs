<script lang="ts">
  import { showAboutModal } from "../state.svelte";
  import AboutPage from "./AboutBook/AboutPage.svelte";
  import { titlePage, frontpage1, frontpage2, backpage1, test1, test2, test3, test4 } from './AboutBook/AboutPageSnippets.svelte';
  
  let dialogRef: HTMLDialogElement | undefined = $state(undefined);
  let flipCount = $state(0);

  $inspect(flipCount)

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
    class="relative w-1/2 h-full flex-center transition-transform duration-500 cursor-pointer" 
    onclick={() => {flipCount = (flipCount + 1) % 5}}
  >
    <AboutPage key={4} {flipCount} frontpage={test4} />
    <AboutPage key={3} {flipCount} frontpage={frontpage2} backpage={test3}/>
    <AboutPage key={2} {flipCount} frontpage={frontpage1}  backpage={test2}/>
    <AboutPage key={1} {flipCount} frontpage={titlePage} backpage={backpage1} />
  </button>
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 75%, transparent);
  }
</style>
