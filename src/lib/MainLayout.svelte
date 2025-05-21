<script lang="ts">
  import Codeblock from "./Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import OutputBlock from "./OutputBlock.svelte";
  import ProjectHeader from "./ProjectHeader.svelte";

</script>

<main class="w-full h-[85vh] px-8 mt-4">
  <section class="w-full h-full flex gap-2.5">
    <Codeblock />
    <section class="flex flex-col w-full gap-2.5">
      <CommentBlock />
      <OutputBlock />
    </section>
  </section>
</main>

<style>
</style>