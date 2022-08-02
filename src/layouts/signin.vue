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

const isSmall = useBreakpoints({
  small: '460px',
}).smaller('small')
</script>

<template>
  <main
    text-center text-gray-700 dark:text-gray-200
    flex flex-col flex-wrap justify-center
    mx-auto h-screen max-w-100
    :class="{ 'w-[80%]': isSmall }"
  >
    <RouterView />
    <div mt-20>
      <hr
        w="75%" mx-auto
        text-neutral-200 dark:text-neutral-700
      >
      <BottomNavigation mt-2 />
    </div>
  </main>
</template>
