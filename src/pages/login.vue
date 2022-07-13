<script setup lang="ts">
import type { Ref } from 'vue'

import type { Axios } from 'axios'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import type { InputOptions, SmallText } from '@/types'
import { useUserStore } from '@/stores/user'

const auth = useUserStore()
const { isLoggedin } = storeToRefs(auth)

const isLoading = ref(false)
const apiClient: Axios = axios.create({
  baseURL: 'http://192.168.201.59:3001',
  // headers: {
  //   authorization: `Bearer ${res.data.token}`
  // },
})
const logUser = event => apiClient.post('login', event)

async function login(event: any) {
  const result = await logUser(event)
  apiClient.defaults.headers.authorization = `Bearer ${result.data.token}`
  isLoggedin.value = true
}
// setTimeout(() => isLoading.value = false, 2000)
// fet

const smallText: Ref<SmallText> = ref({
  text: 'Don\'t have a profile?',
  link: '/register',
  linkText: 'Register now!',
})
</script>

<template>
  <LoginFrom
    name="Login"
    :small-text="smallText"
    :is-loading="isLoading"
    @on-submit="login"
  />
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
