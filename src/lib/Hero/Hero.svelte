<script lang="ts">
  import { type MouseEventHandler } from "svelte/elements";
  import { showAboutModal } from "../../state.svelte";
  import HeroButton from "./HeroButton.svelte";
  import HeroImg from "./HeroImg.svelte";
  import ChevronDown from "../SVGC/ChevronDown.svelte";
  import Header from "../Header.svelte";

  const modalSwitchClick: MouseEventHandler<HTMLButtonElement> = () => {
    showAboutModal.value = !showAboutModal.value;
  };

  const scrolltoMainPanel: MouseEventHandler<HTMLButtonElement> = () => {

  }
</script>

{#snippet scrollToMain()}
  <span class="relative">
    The Panel
    <ChevronDown class="absolute top-1/2 -translate-y-1/2 left-110/100 inline-block size-[1.5em]" />
  </span>
{/snippet}

{#snippet openStory()}
  <span>The Story</span>
{/snippet}

<section class="relative h-dvh bg-kwdr-bg overflow-hidden">
  <div class="absolute hero-squares"></div>  <!--Decorative -->
  
  <Header />
  
  <div class="relative w-full h-[calc(100%-3rem-0.5rem)] lg:h-[calc(100%-3rem-1rem)]">     <!-- relative here is only added to stack children correctly on top of hero squares (ref: stacking order rules)-->
    <div class="lg:flex">
      <!-- HERO TITLE & SUBTITLE -->
      <div class="lg:px-4 pb-6 text-kwdr-fg w-full">
        <h1 class="mb-2 lg:mb-6 text-center playwrite-reg-xl lg:playwrite-reg-4xl xl:playwrite-reg-5xl">
          Skyoxima's Effortarium
        </h1>
        <h6 class="playwrite-light-sm lg:playwrite-light-lg xl:playwrite-light-xl text-center">View my journey</h6>
      </div>

      <!-- DESKTOP HERO NAV BUTTONS -->
      <div class="hidden px-4 w-full lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        <HeroButton body={openStory} clickHandler={modalSwitchClick} />
        <HeroButton body={scrollToMain} clickHandler={modalSwitchClick} />
      </div>
    </div>
    
    <!-- HERO IMAGE -->
    <div class="relative h-72/100 lg:h-8/10 p-2 pointer-events-none">
      <HeroImg addnClass="absolute-center h-full lg:h-auto" />
    </div>

    <!-- MOBILE HERO BUTTONS -->
    <div class="lg:hidden px-4 mt-4 w-full flex justify-center gap-4 lg:gap-8">
      <HeroButton body={openStory} clickHandler={modalSwitchClick} />
      <HeroButton body={scrollToMain} clickHandler={modalSwitchClick} />
    </div>
  </div>
</section>

<style>
</style>