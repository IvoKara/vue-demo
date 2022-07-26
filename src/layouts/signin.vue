<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const router = useRouter()
const authStore = useUserStore()
onBeforeMount(() => {
  if (authStore.isLoggedIn)
    router.push('/')
})

watch(() => authStore.isLoggedIn, () => {
  router.push('/')
})
</script>

<template>
  <main px-4 py-10 text-center text-gray-700 dark:text-gray-200 w-100 flex flex-col justify-center mx-auto>
    <RouterView />
  </main>
</template>
