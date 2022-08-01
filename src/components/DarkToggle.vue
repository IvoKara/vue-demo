<script setup lang="ts">
import type { Ref } from 'vue'
import { toggleDark } from '../composables/dark'

const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')

const { y } = useScroll(watchScroll)
</script>

<template>
  <div>
    <label
      class="swap swap-rotate rounded-full
      hover:border-primary-focus p-1 b-2"
    >
      <span sr-only>Dark Toggle</span>

      <input type="checkbox" @click="toggleDark()">

      <div
        i-carbon-sun
        class="swap-on fill-current"
      />
      <div
        i-carbon-moon
        class="swap-off fill-current"
      />
    </label>
  </div>
</template>
