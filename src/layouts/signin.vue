<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const router = useRouter()
const authStore = useUserStore()
onBeforeMount(() => {
  if (authStore.isLoggedIn)
    router.push('/admin')
})

watch(() => authStore.isLoggedIn, () => {
  router.push('/admin')
})
</script>

<template>
  <main
    text-center text-gray-700 dark:text-gray-200
    flex flex-col flex-wrap justify-center
    mx-auto h="85vh" max-w-100
  >
    <RouterView />
  </main>
  <BottomNavigation />
</template>
