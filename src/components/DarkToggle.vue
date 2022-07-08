<script setup lang="ts">
import { toggleDark } from '../composables/dark'
const { x, y } = useMouse()

const isDraging = ref(false)
const posX = ref(0)
const posY = ref(0)
const st = computed(() => isDraging.value ? `transform: translate(${x.value - posX.value}px, ${y.value - posY.value}px)` : '')

function dragMe() {
  posX.value = x.value
  posY.value = y.value
  isDraging.value = true
}
function stopDrag() {
  isDraging.value = false
}
</script>

<template>
  <!-- <button class="btn btn-circle btn-ghost !outline-none" title="Toggle dark mode" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" text-lg />
  </button> -->
  <div absolute top-2 right-2 :style="st" @mousedown="dragMe" @mouseup="stopDrag">
    <label class="swap swap-rotate b-2 rounded-full hover:border-primary-focus p-1.25">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" @click="toggleDark()">
      <!-- sun icon -->
      <div i-carbon-sun class="swap-on fill-current w-7 h-7" />
      <!-- moon icon -->
      <div i-carbon-moon class="swap-off fill-current w-7 h-7" />
    </label>
  </div>
</template>
