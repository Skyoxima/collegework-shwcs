<script>
  import HeaderButton from "./HeaderButton.svelte";
  import ProjectHeader from "./ProjectHeader.svelte"; 
</script>

<header class="relative max-h-[10vh]">
  <div class="bg-kwdr-bg p-2.5">
    <div class="w-full h-full flex justify-between items-center">
      <h2 class="text-kwdr-fg font-bold text-xl tracking-wide">Skyoxima's Collegework Showcase</h2>
      <div class="w-6/10 flex justify-end items-center gap-4">
        <HeaderButton iconKey='info-icon' />
        <HeaderButton iconKey='logo-github' />
      </div>
    </div>
  </div>
  <ProjectHeader />
</header>