<script lang="ts">
  import Codeblock from "./Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import OutputBlock from "./OutputBlock.svelte";
</script>

<section class="w-full h-[170vh] lg:h-[85vh] px-8 mt-4 mb-4 md:mb-0">
  <div class="w-full h-full flex flex-col lg:flex-row gap-2.5">
    <Codeblock />
    <div class="h-2/3 lg:h-full flex flex-col w-full gap-2.5">
      <CommentBlock />
      <OutputBlock />
    </div>
  </div>
</section>

<style>
</style>
