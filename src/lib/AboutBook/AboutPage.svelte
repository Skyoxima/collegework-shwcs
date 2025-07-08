<script lang="ts">
  import type { AboutCardProps } from "../../types";
  import { noofAboutPages } from "../../constants";

  const {
    key,
    flipCount,
    frontpage,
    backpage,
  }: AboutCardProps = $props();
</script>

<article
  class={[
    "page-container absolute top-0 left-0 w-full h-full perspective-distant transform-3d transition-transform duration-500",
    flipCount > 0
      ? flipCount < noofAboutPages
        ? `translate-x-1/2`
        : `translate-x-full`
      : "",
  ]}
  style={flipCount >= key ? `z-index: ${key}`: ``}
  data-page-number={key}
>
<!--~ z-index is used to maintain a proper stacking for the backpages too, so only when pages are flipped, reverse stacking should be applied -->
  <div
    class={[
      "page-content absolute top-1/2 left-1/2 -translate-1/2 w-full h-full rounded-2xl bg-kwdr-fg--muted transition-transform duration-1000 transform-3d ease-out",
      flipCount >= key ? "-rotate-y-180" : "",
    ]}
  >
    <div
      class="frontside absolute w-full h-full p-6 bg-kwdr-fg--muted backface-hidden rounded-2xl text-base/relaxed text-justify"
    >
      {@render frontpage?.()}
    </div>
    <div
      class={[
        "backside absolute w-full h-full bg-kwdr-bg backface-hidden rounded-2xl rotate-y-180 text-kwdr-fg text-sm text-justify",
      ]}
    >
      {@render backpage?.(flipCount)}
    </div>
  </div>
</article>

<style>
  .page-container > .page-content {
    transform-origin: center left;
  }
</style>
