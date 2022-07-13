<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useDark } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { isDark } from '@/composables/dark'
import { useUserStore } from '@/stores/user'
const auth = useUserStore()
const { isLoggedin } = storeToRefs(auth)
onMounted(() => {
  setTimeout(() => isLoggedin.value = true, 2999)
})
</script>

<template>
  <main my-10 px-4 py-5 text-center>
    {{ isLoggedin }}
    <RouterView />
  </main>
</template>

