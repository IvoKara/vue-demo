<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useDark } from '@vueuse/core'
import { isDark } from '@/composables/dark'
</script>

<template>
  <main my-10 px-4 py-5 text-center>
    <RouterView />
  </main>
</template>

