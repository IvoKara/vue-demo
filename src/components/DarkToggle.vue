<script setup lang="ts">
import type { Ref } from 'vue'
import { toggleDark } from '../composables/dark'
const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')

const { y } = useScroll(watchScroll)
</script>

<template>
  <div>
    <label
      class="swap swap-rotate rounded-full p-1 b-2"
    >
      <span sr-only>Dark Toggle</span>

      <input type="checkbox" @click="toggleDark()">

      <div
        i-carbon-sun
        class="swap-on fill-current max-w-7 max-h-7 no-conflict-transition"
        :class="{ 'w-4 h-4': y > 0 }"
      />

      <div
        i-carbon-moon
        class="swap-off fill-current max-w-7 max-h-7 no-conflict-transition"
        :class="{ 'w-4 h-4': y > 0 }"
      />
    </label>
  </div>
</template>

<style scoped>
.no-conflict-transition {
  transition-property: transform, opacity, width, height;
  transition-duration: 0.3s, 0.3s, 1s, 1s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
}
</style>
