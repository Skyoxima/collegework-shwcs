<script lang="ts">
  import HeaderButton from "./HeaderButton.svelte";
  import ProjectHeader from "./ProjectHeader.svelte"; 
  import { modalSwitch } from '../state.svelte';
  import type { MouseEventHandler } from "svelte/elements";

  const modalSwitchClick: MouseEventHandler<HTMLButtonElement> = () => {
    modalSwitch.value = !modalSwitch.value;
  }
</script>

<header class="relative max-h-[10vh]">
  <div class="bg-kwdr-bg p-2.5">
    <div class="w-full h-full flex justify-between items-center">
      <h2 class="text-kwdr-fg font-bold text-xl tracking-wide">Skyoxima's Collegework Showcase</h2>
      <div class="w-6/10 flex justify-end items-center gap-4">
        <HeaderButton buttonID='info-icon' handler={modalSwitchClick} />
        <HeaderButton buttonID='logo-github' />
        <div class="font-bold text-kwdr-fg">v1</div>
      </div>
    </div>
  </div>
  <ProjectHeader />
</header>