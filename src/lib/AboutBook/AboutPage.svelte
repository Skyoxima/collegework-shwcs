<script lang="ts">
  import type { AboutCardProps } from "../../types";

  const {
    key,
    flipCount,
    frontpage,
    backpage,
  }: AboutCardProps = $props();
  import { noofAboutPages } from "../../constants";
</script>

<!-- TODO: The sliding to adjust for opened book is incorrect, it isn't properly centred -->
<article
  class={[
    "page-container absolute h-full aspect-5/10 lg:aspect-2/3 perspective-distant transform-3d transition-transform duration-500",
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
      "page-content absolute top-1/2 left-1/2 -translate-1/2 w-[95%] h-[95%] rounded-2xl bg-kwdr-fg--muted transition-transform duration-1000 transform-3d ease-out",
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
  /* .page-container:hover > .page-content {
    transform: rotateY(180deg);
  } */

  .page-container > .page-content {
    transform-origin: center left;
  }
</style>
