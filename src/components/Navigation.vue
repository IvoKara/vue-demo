<script setup lang="ts">
import type { Ref } from 'vue'

interface MenuItem {
  name: string
  link: string
}

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
])
</script>

<template>
  <div v-for="(item, i) in items" :key="i">
    {{ item }}
  </div>
</template>
