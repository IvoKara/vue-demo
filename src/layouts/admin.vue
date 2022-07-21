<script setup lang="ts">
import { onBeforeRouteUpdate } from 'vue-router'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

watch(() => route.params, () => {
  console.log(route.fullPath)
  if (!userStore.isLoggedIn)
    router.push('/admin/login')
})

// router.beforeEach((to, from, next) => {
// if (useUserStore().token === null && to.name !== 'admin-login') {
//   return {
//     name: 'admin-login',
//   }
// }
// })
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
