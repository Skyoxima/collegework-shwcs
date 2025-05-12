<script lang="ts">
  const {className}: {className: string} = $props();
</script>

<svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg" class={[className, 'w-6 h-6 transition-transform duration-200']}>
  <path d="M3 3L17 16.5L3 30" stroke="#181616" stroke-width="4.5" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>