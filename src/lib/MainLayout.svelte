<script lang="ts">
  import Codeblock from "./Codeblock/Codeblock.svelte";
  import CommentBlock from "./CommentBlock.svelte";
  import OutputBlock from "./OutputBlock.svelte";
  import NewProjectHeader from "./NewProjectHeader.svelte";
  import LeftSheet from "./LeftSheet.svelte";
</script>

<!--! Heights need to be checked, for both viewports -->
<section class="relative w-full px-8 py-4 h-[160vh] lg:h-[100vh]">
  <LeftSheet />
  <NewProjectHeader />
  <div class="relative w-full h-[calc(100%-64px)] lg:h-[calc(100%-64px)] flex flex-col lg:flex-row gap-2.5">
    <Codeblock />
    <div class="h-2/3 lg:h-full flex flex-col w-full gap-2.5">
      <CommentBlock />
      <OutputBlock />
    </div>
  </div>
</section>

<style>
</style>
