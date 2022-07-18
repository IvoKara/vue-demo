<script setup lang="ts">
import type { Ref } from 'vue'
import jwt_decode from 'jwt-decode'

import type { Axios } from 'axios'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import type { SmallText } from '@/types'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const authStore = useUserStore()

const { isLoading } = storeToRefs(authStore)

// const isLoading = ref(false)
// const apiClient: Axios = axios.create({
//   baseURL: 'http://192.168.201.59:3001',
//   // headers: {
//   //   authorization: `Bearer ${res.data.token}`
//   // },
// })
// const logUser = event => apiClient.post('login', event)

// async function login(event: any) {
//   isLoading.value = true

//   const result = await logUser(event)
//   loginPayload.value = jwt_decode(result.data.token)
//   console.log(loginPayload)
//   token.value = result.data.token

//   apiClient.defaults.headers.authorization = `Bearer ${result.data.token}`
//   // console.log(decode(result.data.token))
// }
// // setTimeout(() => isLoading.value = false, 2000)
// // fet

const smallText: Ref<SmallText> = ref({
  text: 'Don\'t have a profile?',
  link: '/register',
  linkText: 'Register now!',
})

onBeforeMount(() => {
  if (authStore.isLoggedIn)
    router.push('/')
})

watch(() => authStore.isLoggedIn, () => {
  router.push('/')
})
</script>

<template>
  <Head>
    <title>Login</title>
  </Head>
  <LoginFrom
    name="Login"
    :small-text="smallText"
    :is-loading="isLoading"
    @on-submit="authStore.login"
  />
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
