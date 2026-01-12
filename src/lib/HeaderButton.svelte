<script lang="ts">
  import LogoGithub from "./SVGAsComponent/LogoGithub.svelte";
  const { buttonID }: { buttonID: string } = $props();
</script>

<a
  class="header-btn"
  href="https://github.com/Skyoxima"
  aria-label="Skyoxima's Github Page"
  target="_blank"
>
  <LogoGithub className="w-6 h-6 [&>path]:fill-kwdr-fg" />
</a>
