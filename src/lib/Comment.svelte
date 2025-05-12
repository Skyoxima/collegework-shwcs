<script lang="ts">
  interface CommentProps {
    index: string
    comment: string
  }
  const { index, comment }: CommentProps = $props();
</script>

<article class="comment p-2 w-full min-h-15/100 flex items-center gap-4 bg-kwdr-fg rounded-lg text-sm" data-index={index}>
  <div class="flex-75/1000 h-full self-start border-r-2 border-kwdr-fg--muted">
    <div class="decorative-circle w-8 h-8 bg-kwdr-fg--muted rounded-full flex justify-center items-center">
      {index}
    </div>
  </div>
  <h2 class="flex-925/1000">
    {comment}
  </h2>
</article>

<style>
</style>