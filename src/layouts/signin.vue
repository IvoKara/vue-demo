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

const breakpoints = useBreakpoints({
  sm: '460px',
  xs: '350px',
})
const mobile = breakpoints.smaller('sm')
const xsMobile = breakpoints.smaller('xs')
</script>

<template>
  <main
    text-center text-gray-700 dark:text-gray-200
    flex flex-col flex-wrap justify-center
    mx-auto h="90vh" max-w-100
    :class="{ 'w-[80%]': mobile }"
  >
    <RouterView />
    <div
      mx-auto mt-15 min-w="80%"
      :class="{ 'w-[100%]': xsMobile }"
    >
      <hr
        text-neutral-200 dark:text-neutral-700
      >
      <BottomNavigation mt-2 />
    </div>
  </main>
</template>
