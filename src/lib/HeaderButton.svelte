<script lang="ts">
  import type { HeaderButtonProps } from "../types";
  import InfoIcon from "./SVGAsComponent/InfoIcon.svelte";
  import LogoGithub from "./SVGAsComponent/LogoGithub.svelte";

  const { iconKey, handler }: HeaderButtonProps = $props();
</script>

<button class="header-btn w-8 h-8 bg-kwdr-fg rounded-lg flex justify-center items-center active:scale-95 transition-[scale] cursor-pointer" onclick={handler}>
  {#if iconKey==='info-icon'}
    <InfoIcon className='w-6 h-6 [&>path]:stroke-kwdr-bg [&_rect]:fill-kwdr-bg' />
  {:else}
    <LogoGithub className="w-6 h-6 [&>path]:fill-kwdr-bg" />
  {/if}
</button>