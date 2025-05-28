<script lang="ts">
  import { modalSwitch } from "../state.svelte";
  let dialogRef: HTMLDialogElement | undefined;

  // It's a bit convoluted for handling modals because showModal is necessary to properly activate the element, whereas in LeftSheet it was okay to just use CSS...
  // and the state was used inside the component definition whereas here a HeaderButton needs to activate this component, so an external state is warranted.
  $effect(() => {
    if(modalSwitch.value) {
      dialogRef?.showModal();
    }
  });

</script>

<dialog class="w-1/2 h-3/4 p-4 absolute top-1/2 left-1/2 -translate-1/2 bg-kwdr-fg rounded-2xl" bind:this={dialogRef} onclose={() => modalSwitch.value = false}>
  <h2 class="mb-4 font-bold text-2xl text-center">About this project</h2>
  <!-- Might put a self-made decorative bottom border here -->
  <div class="text-sm font-light mx-12 text-justify">
    <p class="mb-4">
      Throughout my college career, I've put in considerable effort in learning the material through practical assignments. To me, that was Engineering. This is how I found my affinity for Frontend too.
    </p>
    <p class="">
      Here I wish to display many of such works, to provide a window into my thought process when going around a project. Blocks involved are:
    </p>
    <ul class="pl-2 mb-4 list-disc">
      <li>Code block, displays the code, i.e., my way of translating logic into application.</li>
      <li>Comment block, provides a peek into what I deem important when building the project.</li>
      <li>Output block, displays the results, the submissions themselves.</li>
    </ul>
    <p class="mb-4">
      This project also serves as an echo of the past, I intend to use this to recall my journey at times I feel strayed.
    </p>
    <p class="mb-4">
      v1 displays many of my projects from 3 subjects: DAOA, SF and IS. In the next versions, I wish to include works from the future subjects. (they'll be interpreted .ipynbs)
    </p>
  </div>
  <button class="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/10 h-10 bg-kwdr-bg text-kwdr-fg rounded-xl active:scale-90 transition-transform duration-300 ease-in cursor-pointer" onclick={() => { dialogRef?.close(); }}>
    Close
  </button>
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 50%, transparent);
  }
</style>