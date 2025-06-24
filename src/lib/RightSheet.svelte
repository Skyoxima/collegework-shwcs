<script lang="ts">
  import { currentProject } from "../state.svelte";
  import RightArrow from "./SVGAsComponent/RightArrow.svelte";

  let sheetMode = $state(false);
</script>

{#if currentProject.projectBody.markdown && currentProject.projectBody.markdown.length > 0}
  <aside
  class={[
      "fixed top-0 w-[80%] md:w-[40%] h-[100lvh] transition-[right] duration-[500ms]",
      sheetMode ? "right-0" : "-right-8/10 md:-right-[40%]",
    ]}
  >
  <h2 class="py-1 bg-kwdr-fg--muted text-center text-xl xl:text-2xl">
    Conclusions
  </h2>
  <div
    class="w-full h-full p-4 bg-kwdr-fg border-l-4 border-l-kwdr-fg--muted overflow-y-auto custom-scrollbar"
  >
    {#each currentProject.projectBody.markdown as md}
      <article class="mb-4 p-4 bg-kwdr-fg--muted rounded-2xl border-y-1 border-t-kwdr-bg/25 border-b-white/75">
        {@html md}
      </article>
    {/each}
  </div>

    <button
      class="absolute top-1/2 -translate-y-1/2 -translate-x-full w-10 aspect-[2/3] bg-kwdr-fg--muted flex justify-center items-center rounded-l-full border-l-2 border-kwdr-bg/50 cursor-pointer"
      onclick={() => {
        sheetMode = !sheetMode;
      }}
    >
      <RightArrow className={sheetMode ? "rotate-0" : "rotate-180"} />
    </button>
  </aside>
{/if}

<style>

</style>