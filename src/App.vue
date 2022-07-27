<script setup lang="ts">
const watchScroll = ref<HTMLElement | null>(null)

provide('window', watchScroll)
</script>

<template>
  <div
    ref="watchScroll"
    transition-dark-light scroll-smooth
    scrollbar="~
      rounded
      track-radius-0
      track-color-neutral-200 thumb-color-neutral-400
      dark:track-color-stone-600 dark:thumb-color-neutral-300"
  >
    <RouterView />
  </div>
</template>

<style>
html {
  overflow: hidden;
}
.ps {
  height: 100vh;
}
</style>

