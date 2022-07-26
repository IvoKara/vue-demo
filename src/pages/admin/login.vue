<script setup lang="ts">
import type { Ref } from 'vue'

import jwt_decode from 'jwt-decode'
import type { InputOptions, SmallText } from '@/types'
import { useFormMutation } from '@/composables/formMutation'
import { useUserStore } from '@/stores/user'
import { axiosInstance } from '@/api/axiosInstance'

const smallText: Ref<SmallText> = ref({
  text: 'Don\'t have a profile?',
  link: '/register',
  linkText: 'Register now!',
})

const userStore = useUserStore()
const url = 'http://192.168.201.59:3002/login'

const { data, mutate, mutateAsync, isLoading, error: err } = useFormMutation(url, axiosInstance.value)
const error: any = err

async function login(event) {
  await mutateAsync(event)
  userStore.token = data.value?.data.token
  if (userStore.token)
    userStore.payload = JSON.stringify(jwt_decode(userStore.token))
}

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const inputOptions: InputOptions[] = [

  { label: 'Username', type: 'text', placeholder: 'Username', targetRef: username },
  { label: 'Password', type: 'password', placeholder: 'Password', targetRef: password },
]

useHead({
  title: 'Login',
})
</script>

<template>
  <LoginFrom
    name="Login"
    :small-text="smallText"
    :is-loading="isLoading"
    @on-submit="login"
  />
  <div class="text-error text-sm">
    {{ error?.response.data }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
