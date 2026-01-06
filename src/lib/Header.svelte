<script lang="ts">
  import HeaderButton from "./HeaderButton.svelte";
  import ProjectHeader from "./ProjectHeader/ProjectHeader.svelte";
  import { showAboutModal } from "../state.svelte";
  import type { MouseEventHandler } from "svelte/elements";

  const modalSwitchClick: MouseEventHandler<HTMLButtonElement> = () => {
    showAboutModal.value = !showAboutModal.value;
  };
</script>

<header class="absolute top-0 right-0 z-100 px-4 py-2">
  <div class="flex justify-end gap-4">
    <HeaderButton buttonID="info-icon" handler={modalSwitchClick} />
    <HeaderButton buttonID="logo-github" />
    <span class="playwrite-base-light text-kwdr-fg">v3</span>
  </div>
</header>
