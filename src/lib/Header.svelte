<script lang="ts">
  import HeaderButton from "./HeaderButton.svelte";
  import ProjectHeader from "./ProjectHeader.svelte";
  import { showAboutModal } from "../state.svelte";
  import type { MouseEventHandler } from "svelte/elements";

  const modalSwitchClick: MouseEventHandler<HTMLButtonElement> = () => {
    showAboutModal.value = !showAboutModal.value;
  };
</script>

<header class="relative">
  <div class="bg-kwdr-bg p-2.5">
    <div class="w-full h-full flex justify-between items-center">
      <h2 class="text-kwdr-fg text-sm font-bold md:text-xl md:tracking-wide">
        Skyoxima's Effortarium
      </h2>
      <div class="w-6/10 flex justify-end items-center gap-4">
        <HeaderButton buttonID="info-icon" handler={modalSwitchClick} />
        <HeaderButton buttonID="logo-github" />
        <div class="font-bold text-kwdr-fg">v2</div>
      </div>
    </div>
  </div>
  <ProjectHeader />
</header>
