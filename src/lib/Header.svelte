<script lang="ts">
  import HeaderButton from "./HeaderButton.svelte";

</script>

<header class="relative px-4 py-2 mb-2 lg:mb-4">   <!-- relative here is for maintaining stacking order w.r.t hero-squares -->
  <div class="flex justify-end gap-4">
    <HeaderButton buttonID="logo-github" />
    <span class="playwrite-light-base text-kwdr-fg">v3</span>
  </div>
</header>
