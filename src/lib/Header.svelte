<script>
  import HeaderButton from "./HeaderButton.svelte";
  
</script>

<header class="w-full h-[10vh] bg-kwdr-bg">
  <div class="header-container w-full h-full p-4 flex justify-between items-center">
    <h2 class="header-title text-kwdr-fg font-normal tracking-wide">Skyoxima's Collegework Showcase</h2>
    <div class="btn-container w-6/10 flex justify-end items-center gap-4">
      <HeaderButton iconKey='info-icon' />
      <HeaderButton iconKey='logo-github' />
    </div>
  </div>
</header>