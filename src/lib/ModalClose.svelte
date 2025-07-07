<script lang="ts">
  import CloseIcon from "./SVGAsComponent/CloseIcon.svelte";
  const { dialogRef, className, addnClass }: {dialogRef: HTMLDialogElement, className?: string | string[], addnClass?: string} = $props();

</script>

<button
  class={["handler-wrapper", className]}
  onclick={() => {
    dialogRef?.close();
  }}
>
  <CloseIcon
    className={[
      "absolute active:scale-70 transition-transform duration-100 ease-in cursor-pointer",
      addnClass ? addnClass : "",
    ]}
  />
</button>

<style>
</style>
