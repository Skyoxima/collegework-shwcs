<script lang="ts" module>
  import LogoVector from "../SVGAsComponent/LogoVector.svelte";
  import { fade } from "svelte/transition";
  import ProjectLayout from "../SVGAsComponent/ProjectLayout.svelte";
  import LeftSheetLayout from "../SVGAsComponent/LeftSheetLayout.svelte";
  import LeftSheetLayoutRetracted from "../SVGAsComponent/LeftSheetLayout_Retracted.svelte";
  import MdLayout from "../SVGAsComponent/MDLayout.svelte";

  export {
    titlePage,
    frontpage1,
    frontpage2,
    frontpage2ex,
    frontpage3,
    backpage1,
    backpage2,
    backpage3,
    backpage3ex,
  };
</script>

{#snippet bgLogoVector()}
  <LogoVector className="w-[calc(100%-2rem)] h-auto max-h-[calc(100%-1rem)] absolute -translate-1/2 top-1/2 left-1/2 [&_path]:stroke-white/25 lg:[&_path]:stroke-black [&_path]:stroke-[0.25]" />
{/snippet}

{#snippet titlePage()}
  <div class="p-4 w-full h-full flex flex-col gap-8 md:gap-16 items-center">
    <div class="h-2/3">
      <LogoVector className="w-full h-full" />
    </div>
    <div class="w-full text-center font-playwrite-in text-2xl md:text-3xl">
      What's this project?
    </div>
  </div>
{/snippet}

{#snippet frontpage1()}
  <p class="playwrite-base-light">
    Throughout my college career, I've put in considerable effort in learning
    the material through practical assignments. To me, this was Engineering. I
    didn't mind spending time on these assignments, it was always a learning
    experience working on them.<br />With this showcase, I want to display
    almost everything that I've worked on over these years. It is a window into
    my journey and my work process, I hope it is enjoyable to see.
    <span
      class="block text-center mt-2"
    >
      Welcome to my garden.
    </span>
  </p>
{/snippet}

{#snippet frontpage2()}
  <p class="playwrite-base-light">
    Firstly, projects can be accessed <strong>subject-wise</strong> by pulling the sheet from the left
    side:
  </p>
  <div class="flex-center gap-2.5 my-2">
    <LeftSheetLayoutRetracted className="w-40 h-auto" />
    <LeftSheetLayout className="w-40 h-auto" />
  </div>

  <p class="playwrite-base-light">
    Once a project is loaded, the core is laid out as the following:
  </p>
  <div class="flex-center my-2">
    <ProjectLayout className="w-40 h-auto" />
  </div>
  <ul class="playwrite-base-light mb-2">
    <li>All the blocks are scrollable in both directions whenever necessary.</li>
  </ul>
  {/snippet}
  
{#snippet frontpage2ex()}
  <ul class="playwrite-base-light mb-2">
    <li>Comment buttons can be clicked to scroll to the corresponding line.</li>
    <li>Output images can be clicked to open a Modal view.</li>
    <li>Some projects have an additional <strong>Markdown</strong> section on the <strong>right side</strong>.</li>
  </ul>
  <div class="flex-center my-2">
    <MdLayout className="w-48 h-auto" />
  </div>
{/snippet}

{#snippet frontpage3()}
  <p class="playwrite-base-light">
    This project is made using <strong>Svelte 5</strong>; it is entirely client-side as of v2.
    Other tech and tools used are:
  </p>
  <ul class="playwrite-base-light list-disc ml-4">
    <li class=""><strong>Rehype Pretty Code</strong>, for Code display and interaction.</li>
    <li class=""><strong>Kanagawa Dragon</strong> Theme.</li>
    <li class=""><strong>IBM Plex Mono</strong> as the primary font, <strong>Playwrite IN</strong> as the secondary.</li>
    <li class=""><strong>Figma</strong> for custom assets: Icons, Logo, App Design.</li>
    <li class="">Projects were written in C / Python / JuPyter and were processed to fit this project's JSON db schema using <strong>Python.</strong></li>
  </ul>
{/snippet}

<!-- The if statement is only used to apply the delay correctly when the last page is flipped and the stacking order is reset -->
<!-- I think I couldn't have done it with in: without also using the same if, readers won't take a set amount of time and in: works based on knowing the incoming time -->
{#snippet backpage1(flipCount: number)}
  {#if flipCount === 1}
    {@render bgLogoVector()}
    <div
      class="w-full h-full flex-center playwrite-3xl-bold relative"
      out:fade={{ delay: 250 }}
    >
      Motive
    </div>
  {/if}
{/snippet}

{#snippet backpage2()}
  {@render bgLogoVector()}
  <div
    class="w-full h-full flex-center playwrite-3xl-bold relative"
  >
    Structure
  </div>
{/snippet}

{#snippet backpage3ex()}
  {@render bgLogoVector()}
  <div
    class="w-full h-full flex-center playwrite-3xl-bold relative"
  >
    Structure ||
  </div>
{/snippet}

{#snippet backpage3()}
  {@render bgLogoVector()}
  <div
    class="w-full h-full flex-center playwrite-3xl-bold relative"
  >
    Specifications
  </div>
{/snippet}