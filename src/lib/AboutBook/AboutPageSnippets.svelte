<script lang="ts" module>
  import LogoVector from '../SVGAsComponent/LogoVector.svelte';
  import { fade } from 'svelte/transition';

  export { titlePage, frontpage1, frontpage2, backpage1, test1, test2, test3, test4 };
</script>

{#snippet titlePage()}
  <div class="p-4 w-full h-full flex flex-col gap-10 items-center">
    <div class="h-2/3">
      <LogoVector className="w-full h-full" />
    </div>
    <div
    class="w-full text-center font-playwrite-in text-3xl" 
    >
      What's this project?
    </div>
  </div>
{/snippet}

{#snippet frontpage1()}
  <p class="font-playwrite-in text-base/10 font-light">
    Throughout my college career, I've put in considerable effort in learning the
    material through practical assignments. To me, this was Engineering.
    This is how I found my affinity for Frontend too.
  </p>
{/snippet}

{#snippet frontpage2()}
  <p class="font-playwrite-in font-light text-base/10">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis
    aut tempore repudiandae maxime. Non doloremque ducimus nulla ab accusamus iste
    sed explicabo, beatae unde repellendus voluptas labore porro doloribus.
  </p>
{/snippet}

{#snippet backpage1(flipCount: number)}
  {#if flipCount === 1}
    <div class="w-full h-full flex-center text-3xl font-bold tracking-wide font-playwrite-in" out:fade={{ delay: 250 }}>
      Motive
    </div>
  {/if}
{/snippet}

{#snippet test1()}
  <div class="p-4 text-2xl">1</div>
{/snippet}
{#snippet test2()}
  <div class="p-4 text-2xl">2</div>
{/snippet}
{#snippet test3()}
  <div class="p-4 text-2xl">3</div>
{/snippet}
{#snippet test4()}
  <div class="p-4 text-2xl">4</div>
{/snippet}

<!-- <div class="text-2xs xl:text-sm font-light mx-4 xl:mx-12 text-justify">
    <p class="mb-2 xl:mb-4">
      Throughout my college career, I've put in considerable effort in learning
      the material through practical assignments. To me, that was Engineering.
      This is how I found my affinity for Frontend too.
    </p>
    <p class="">
      Here I wish to display many of such works, to provide a window into my
      thought process when going around a project. Blocks involved are:
    </p>
    <ul class="pl-2 mb-2 xl:mb-4 list-disc">
      <li>
        Code block, displays the code, i.e., my way of translating logic into
        application.
      </li>
      <li>
        Comment block, provides a peek into what I deem important when building
        the project.
      </li>
      <li>Output block, displays the results, the submissions themselves.</li>
    </ul>
    <p class="mb-2 xl:mb-4">
      This project also serves as an echo of the past, I intend to use this to
      recall my journey at times I feel strayed.
    </p>
    <p class="mb-2 xl:mb-4">
      v1 displays many of my projects from 3 subjects: DAOA, SF and IS. In the
      next versions, I wish to include works from the future subjects. (they'll
      be interpreted .ipynbs)
    </p>
  </div> -->
