<script lang="ts">
  import CloseIcon from "./SVGAsComponent/CloseIcon.svelte";
  const { dialogRef, addnClass }: {dialogRef: HTMLDialogElement, addnClass?: string} = $props();

</script>

<button
      class="handler-wrapper"
      onclick={() => {
        dialogRef?.close();
      }}
    >
      <CloseIcon
        className={["absolute active:scale-70 transition-transform duration-100 ease-in cursor-pointer", addnClass ? addnClass : '']}
      />
</button>

<style>

</style>