<script lang="ts">
  import { showAboutModal } from "../state.svelte";
  import ModalClose from "./ModalClose.svelte";
  import CloseIcon from "./SVGAsComponent/CloseIcon.svelte";
  let dialogRef: HTMLDialogElement | undefined = $state(undefined);

  // It's a bit convoluted for handling modals because showModal is necessary to properly activate the element, whereas in LeftSheet it was okay to just use CSS...
  // and the state was used inside the component definition whereas here a HeaderButton needs to activate this component, so an external state is warranted.
  $effect(() => {
    if (showAboutModal.value) {
      dialogRef?.showModal();
    }
  });
</script>

<dialog
  class="w-9/10 lg:w-1/2 h-max p-4 absolute top-1/2 left-1/2 -translate-1/2 bg-kwdr-fg rounded-2xl"
  bind:this={dialogRef}
  onclose={() => (showAboutModal.value = false)}
>
  <div class="relative mb-2 xl:mb-4">
    <h2 class=" font-bold text-sm xl:text-2xl text-center">
      About this project
    </h2>
    <ModalClose {dialogRef} addnClass='top-0 right-0 size-4 lg:size-6' />
  </div>
  <!-- Might put a self-made decorative bottom border here -->
  <div class="text-2xs xl:text-sm font-light mx-4 xl:mx-12 text-justify">
    <p class="mb-2 xl:mb-4">
      Throughout my college career, I've put in considerable effort in learning
      the material through practical assignments. To me, that was Engineering.
      This is how I found my affinity for Frontend too.
    </p>
    <p class="">
      Here I wish to display many of such works, to provide a window into my
      thought process when going around a project. Blocks involved are:
    </p>
    <ul class="pl-2 mb-2 xl:mb-4 list-disc">
      <li>
        Code block, displays the code, i.e., my way of translating logic into
        application.
      </li>
      <li>
        Comment block, provides a peek into what I deem important when building
        the project.
      </li>
      <li>Output block, displays the results, the submissions themselves.</li>
    </ul>
    <p class="mb-2 xl:mb-4">
      This project also serves as an echo of the past, I intend to use this to
      recall my journey at times I feel strayed.
    </p>
    <p class="mb-2 xl:mb-4">
      v1 displays many of my projects from 3 subjects: DAOA, SF and IS. In the
      next versions, I wish to include works from the future subjects. (they'll
      be interpreted .ipynbs)
    </p>
  </div>
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 50%, transparent);
  }
</style>
