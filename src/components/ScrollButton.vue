<script setup lang="ts">
import type { Ref } from 'vue'

const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')
// const watchScroll = ref(null)
// onMounted(() => {
// // @ts-expect-error next-line
// watchScroll.value = inject('window').value
// })

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
    <!--  :style="{
         transform: scrollByY > 0 ? 'translate3d(0px, -200%, 10px)' : 'none',
         }"
        bottom-4
      :class="{ '-translate-y-24': scrollByY > 0 }"
" -->
    <button
      class="btn btn-secondary no-animation"
      fixed bottom="-20" right="2rem"
      transition-transform-1000 transition="cubic-bezier(0.76, 0.01, 0.04, 0.94)"
      :style="{
        transform: scrollByY > 0 ? 'translate3d(0px, -200%, 10px)' : 'unset',
      }"
      @click="backToTop"
    >
      top
    </button>
  </div>
</template>

<style scoped>
[v-cloak] > * {
  display:none
   }
</style>
