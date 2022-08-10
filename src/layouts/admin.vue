<script setup lang="ts">
// import { onBeforeRouteUpdate } from 'vue-router'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import type { MenuItem } from '@/types.js'

// const route = useRoute()
// const router = useRouter()
const userStore = useUserStore()

// watch(() => route.params, () => {
//   // console.log(route.fullPath)
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

const sidebarRoutes: Ref<MenuItem[]> = ref([
  { name: 'Dashboard', link: '/admin' },
  { name: 'Preview', link: '/admin/preview' },
  { name: 'Edit Posts', link: '/admin/posts/edit' },
  { name: 'Settings', link: '/admin/settings' },
])
</script>

<template>
  <div class="grid grid-cols-[25em_1fr]">
    <!-- border-r-3 border-r-neutral-700 -->
    <nav p-7 h-screen bg-light-500 dark:bg="#333">
      <h3 text-3xl mb-9 mt-3 ml-6>
        Welcome,
        <span v-if="userStore.token === null">Admin!</span>
        <span v-else>
          {{ JSON.parse(userStore.payload)?.username }}!
        </span>
      </h3>
      <ul flex flex-col gap-2 text-lg>
        <li v-for="(route, i) in sidebarRoutes" :key="i">
          <RouterLink
            :to="route.link"
            block py="3.5" px-6 rounded-2
            active-class="bg-black dark:bg-gray-100 bg-opacity-10 dark:bg-opacity-10"
          >
            {{ route.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <main py-12 px-15>
      <DarkToggle fixed top-3 right-3 />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
</style>
