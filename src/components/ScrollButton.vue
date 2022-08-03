<script setup lang="ts">
import type { Ref } from 'vue'

const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')

const { y: scrollByY } = useScroll(watchScroll)

function backToTop() {
  watchScroll?.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div v-if="watchScroll !== null">
    <button
      class="btn btn-primary no-animation"
      fixed bottom="-20" right="2rem"
      transition-transform-1000
      :style="{
        transform: scrollByY > 0 ? 'translate3d(0px, -200%, 10px)' : 'unset',
      }"
      @click="backToTop"
    >
      top
    </button>
  </div>
</template>
