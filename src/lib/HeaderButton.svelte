<script lang="ts">
  import InfoIcon from "./SVGAsComponent/InfoIcon.svelte";
  import LogoGithub from "./SVGAsComponent/LogoGithub.svelte";

  const { iconKey }: {iconKey: string} = $props();
</script>

<button class="header-btn w-12 h-12 bg-kwdr-fg rounded-lg flex justify-center items-center active:scale-95 transition-[scale] cursor-pointer">
  {#if iconKey==='info-icon'}
    <InfoIcon className='[&>path]:stroke-kwdr-bg [&_rect]:fill-kwdr-bg' />
  {:else}
    <LogoGithub className="[&>path]:fill-kwdr-bg" />
  {/if}
</button>