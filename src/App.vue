<script setup lang="ts">
const watchScroll = ref<HTMLElement | null>(null)
const { y: scrollByY } = useScroll(watchScroll)

function backToTop() {
  watchScroll.value.$el.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <RouterView ref="watchScroll" style="overflow: auto" />
  <ClientOnly>
    <div v-if="watchScroll !== null">
      <div
        class="btn btn-secondary"
        fixed bottom-4 right="1.5rem"
        transition-transform-1000 transition="cubic-bezier(0.76, 0.01, 0.04, 0.94)"
        transform-gpu
        :style="{
          transform: scrollByY > 0 ? 'none' : 'translate3d(0px, 200%, 10px)',
        }"
        @click="backToTop"
      >
        top
      </div>
    </div>
  </ClientOnly>
</template>

<style>
body {
  overflow: hidden;
}
.ps {
  height: 100vh;
}
</style>

