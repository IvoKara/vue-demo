<script setup lang="ts">
// import { onBeforeRouteUpdate } from 'vue-router'
// import { useUserStore } from '@/stores/user'

// const router = useRouter()
// const userStore = useUserStore()

// watch(() => route.params, () => {
//   console.log(route.fullPath)
//   if (!userStore.isLoggedIn)
//     router.push('/admin/login')
// })

// router.beforeEach((to, from) => {
//   if (userStore.token === null && to.name !== 'admin-login') {
//     return {
//       replace: true,
//       name: 'admin-login',
//     }
//   }
// })
</script>

<template>
  <main>
    <DarkToggle />
    <RouterView />
    <RouterLink to="/" class="btn btn-primary">
      Home
    </RouterLink>
  </main>
</template>
