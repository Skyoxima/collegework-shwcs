<script lang="ts">
  type HeroImgProps = {
    addnClass?: string
  }
  const { addnClass }: HeroImgProps = $props();
</script>

<picture>
  <source srcset="/images/hero-mobile-3.png" media="(max-width: 1023px)" />
  <img src="/images/hero-desktop-3.png" alt="Hero Desktop" class={["", addnClass]} />
</picture>


<style>

</style>