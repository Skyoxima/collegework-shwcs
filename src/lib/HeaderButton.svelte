<script lang="ts">
  import type { HeaderButtonProps } from "../types";
  import InfoIcon from "./SVGAsComponent/InfoIcon.svelte";
  import LogoGithub from "./SVGAsComponent/LogoGithub.svelte";

  const { buttonID, handler }: HeaderButtonProps = $props();
</script>

{#if buttonID === 'info-icon'}
  <button class="header-btn" onclick={handler}>
    <InfoIcon className='w-6 h-6 [&>path]:stroke-kwdr-bg [&_rect]:fill-kwdr-bg' />
  </button>
{:else}
  <a class="header-btn" href="https://github.com/Skyoxima" aria-label="Skyoxima's Github Page" target="_blank">
    <LogoGithub className="w-6 h-6 [&>path]:fill-kwdr-bg" />
  </a>
{/if}