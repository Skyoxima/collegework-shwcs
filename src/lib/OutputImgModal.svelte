<script lang="ts">
  import { currentImage, currentProject } from "../state.svelte";
  import { processAlt } from "../auxiliary";
  import ModalClose from "./ModalClose.svelte";

  let dialogRef: HTMLDialogElement | undefined = $state(undefined); // this way, it can be properly passed to the ModalClose component, it will get the dialogElement in its ref (try $inspect and check)

  $effect(() => {
    if (currentImage.src !== "") {
      dialogRef?.showModal();
    }
  });
</script>

<dialog
  class="w-[85%] lg:w-3/4 absolute top-1/2 left-1/2 -translate-1/2 bg-transparent overflow-visible"
  bind:this={dialogRef}
  onclose={() => {
    currentImage.src = "";
  }}
>
  <div
    id="dialog-content"
    class="p-2 lg:p-8 rounded-xl lg:rounded-3xl"
    style={`background: ${currentProject.projectBody.bgColors[processAlt(currentImage.src)]}`}
  >
    <img src={currentImage.src} alt="ModalView" title="ModalView" />
  </div>
  <div class="absolute -top-4 -right-4 lg:-right-8 size-4 lg:size-8 rounded-full bg-kwdr-fg items-start">
    <ModalClose {dialogRef} addnClass="size-3 lg:size-6 top-1/2 left-1/2 -translate-1/2" />
  </div>
</dialog>

<style>
  ::backdrop {
    background: color-mix(in srgb, var(--color-kwdr-bg) 75%, transparent);
  }
</style>
