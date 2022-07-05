<script setup lang="ts">
import type { Ref } from 'vue'

const name: Ref<string> = ref('Search for photo')
</script>

<template>
  <main px-4 py-10 text-center text-gray-700 dark:text-gray-200>
    <div bg-blue-4>
      {{ name }}
    </div>
    <input v-model="name" block mx-auto mt-20 border-2 border-black>
    <RouterView />
  </main>
</template>
