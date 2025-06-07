<script lang="ts">
  import Codeblock from "./Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import OutputBlock from "./OutputBlock.svelte";
</script>

<main class="w-full h-[170vh] lg:h-[85vh] px-8 mt-4 mb-4 md:mb-0">
  <section class="w-full h-full flex flex-col lg:flex-row gap-2.5">
    <Codeblock />
    <section class="h-2/3 lg:h-full flex flex-col w-full gap-2.5">
      <CommentBlock />
      <OutputBlock />
    </section>
  </section>
</main>

<style>
</style>
