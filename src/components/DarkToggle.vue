<script setup lang="ts">
import type { Ref } from 'vue'
import { toggleDark } from '../composables/dark'

const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')

const { y } = useScroll(watchScroll)
</script>

<template>
  <!-- <button class="btn btn-circle btn-ghost !outline-none" title="Toggle dark mode" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" text-lg />
  </button> -->
  <div>
    <label
      class="swap swap-rotate rounded-full hover:border-primary-focus p-1"
      :class="y <= 0 ? 'b-2' : 'b-1'"
    >
      <span sr-only>Dark Toggle</span>
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" @click="toggleDark()">
      <!-- sun icon -->
      <div
        i-carbon-sun
        class="swap-on fill-current"
        :class="y <= 0 ? 'w-7 h-7' : 'w-4 h-4'"
      />
      <!-- moon icon -->
      <div
        i-carbon-moon
        class="swap-off fill-current"
        :class="y <= 0 ? 'w-7 h-7' : 'w-4 h-4'"
      />
    </label>
  </div>
</template>
