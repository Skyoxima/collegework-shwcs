<script lang="ts" module>
  import LogoVector from "../SVGAsComponent/LogoVector.svelte";
  import Manual_1 from '/images/Manual_1.png';
  import Manual_2 from '/images/Manual_2.png';
  import Manual_3 from '/images/Manual_3.png';
  import Manual_4 from '/images/Manual_4.png';
  
  export {
    titlePage,
    frontpage1,
    frontpage2,
    frontpage2ex,
    frontpage3,
  };
</script>

{#snippet titlePage()}
  <div class="p-4 size-full flex flex-col gap-8 md:gap-16 items-center">
    <div class="h-2/3">
      <LogoVector className="size-full" />
    </div>
    <div class="w-full text-center playwrite-reg-2xl md:playwrite-reg-3xl">
      What's this project?
    </div>
  </div>
{/snippet}

{#snippet frontpage1()}
  <p class="about-body-font">
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
  <p class="about-body-font">
    Firstly, projects can be accessed <strong>subject-wise</strong> by pulling the sheet from the left
    side:
  </p>
  <div class="flex-center gap-2.5 my-2">
    <img src={Manual_1} class="w-24 md:w-40" alt="Manual-1">
    <img src={Manual_2} class="w-24 md:w-40" alt="Manual-2"/>
  </div>

  <p class="about-body-font">
    Once a project is loaded, the core is laid out as the following:
  </p>
  <div class="flex-center my-2">
    <img src={Manual_3} class="w-24 md:w-40" alt="Manual-3"/>
  </div>
  <ul class="about-body-font mb-2">
    <li>All the blocks are scrollable in both directions whenever necessary.</li>
  </ul>
  {/snippet}
  
{#snippet frontpage2ex()}
  <ul class="about-body-font mb-2">
    <li>Comment buttons can be clicked to scroll to the corresponding line.</li>
    <li>Output images can be clicked to open a Modal view.</li>
    <li>Some projects have an additional <strong>Markdown</strong> section on the <strong>right side</strong>.</li>
  </ul>
  <div class="flex-center my-2">
    <img src={Manual_4} class="mt-4 w-40 md:w-48" alt="Manual-4" title="Manual-4">
  </div>
{/snippet}

{#snippet frontpage3()}
  <p class="about-body-font">
    This project is made using <strong>Svelte 5</strong>; it has some basic db access via <strong>Supabase</strong>.
    Other tech and tools used are:
  </p>
  <ul class="about-body-font list-disc ml-4">
    <li class=""><strong>Shiki/Rehype</strong>, for Code display and interaction.</li>
    <li class=""><strong>Kanagawa Dragon</strong> Theme.</li>
    <li class=""><strong>IBM Plex Mono</strong> in codeblock, <strong>Playwrite IN</strong> in the rest.</li>
    <li class=""><strong>Figma</strong> for custom assets: Icons, Logo, App Design.</li>
    <li class="">Projects were written in C / Python / JuPyter and were processed to fit this project's JSON db schema using <strong>Python.</strong></li>
  </ul>
{/snippet}