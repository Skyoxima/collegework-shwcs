<script lang="ts">
  import { currHltdLine } from "../state.svelte";

  interface CommentProps {
    index: string;
    comment: string;
  }
  const { index, comment }: CommentProps = $props();

  function processComment(comment: string) {
    const processedComment = comment.split(/#[!?*\s~]*/g);
    return processedComment[processedComment.length - 1];
  }

  // IDEA: Maybe I can use the comment notations to also style the comments accordingly -- Doesn't work cause the codeblocks don't have the notations, it would be confusing to the viewer
</script>

<button
  class={[
    "comment p-1 lg:p-2 w-full min-h-[15%] lg:min-h-20/100 flex shrink-0 items-center gap-4 bg-kwdr-fg rounded-lg text-xs lg:text-sm text-left cursor-pointer",
    Number(index) === currHltdLine.value
      ? "border-x-2 border-x-kwdr-bg/50"
      : "",
  ]}
  onclick={() => (currHltdLine.value = Number(index))}
>
  <div class="w-10 lg:w-12 h-full self-start border-r-2 border-kwdr-fg--muted">
    <div
      class="size-6 lg:size-8 flex justify-center items-center bg-kwdr-fg--muted rounded-full"
    >
      {index}
    </div>
  </div>
  <h2 class="w-full pr-2 text-ellipsis pointer-events-none">
    {processComment(comment)}
  </h2>
</button>

<style>
</style>
