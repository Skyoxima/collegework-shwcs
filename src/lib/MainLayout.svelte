<script lang="ts">
  import Codeblock from "./Codeblock/Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import OutputBlock from "./OutputBlock.svelte";
  import NewProjectHeader from "./NewProjectHeader.svelte";
  import LeftSheet from "./LeftSheet.svelte";
</script>

<section class="relative w-full min-h-[100dvh] px-8 py-4">
  <LeftSheet />
  <NewProjectHeader />
  <div class="size-full flex flex-col lg:flex-row gap-2.5">
    <Codeblock />
    <div class="h-2/3 lg:h-full flex flex-col w-full gap-2.5">
      <CommentBlock />
      <OutputBlock />
    </div>
  </div>
</section>

<style>
</style>
