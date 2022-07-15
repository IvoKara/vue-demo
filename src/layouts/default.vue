<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useDark } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { isDark } from '@/composables/dark'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const auth = useUserStore()
const { isLoggedin } = storeToRefs(auth)
// onMounted(() => {
//   setTimeout(() => {
//     auth.$patch({
//       isLoggedin: false,
//     })
//   }, 2999)
// })

// auth.$subscribe((ev) => {
//   if (!ev?.payload?.isLoggedin)
//     router.push('/login')
// })
</script>

<template>
  <main my-10 px-4 py-5 text-center>
    <RouterView />
  </main>
</template>

