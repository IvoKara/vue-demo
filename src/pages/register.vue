<script setup lang="ts">
import type { Ref } from 'vue'
import jwt_decode from 'jwt-decode'
import type { InputOptions, SmallText } from '@/types'
import { useUserStore } from '@/stores/user'
import { useFormMutation } from '@/composables/formMutation'
import { axiosInstance } from '@/api/axiosInstance'

const userStore = useUserStore()
const smallText: Ref<SmallText> = ref({
  text: 'Already have a profile?',
  link: '/admin/login',
  linkText: 'Login here!',
})

const url = 'http://192.168.201.59:3002/register'
const { data, mutateAsync, isLoading, error: err } = useFormMutation(url, axiosInstance.value)
const error: any = err

async function register(event) {
  await mutateAsync(event)
  userStore.token = data.value?.data.token
  if (userStore.token)
    userStore.payload = JSON.stringify(jwt_decode(userStore.token))
}

useHead({
  title: 'Register',
})
</script>

<template>
  <LoginFrom
    name="Register"
    :small-text="smallText"
    :is-loading="isLoading"
    :has-confirm-pass="true"
    @on-submit="register"
  />
  <div class="text-error text-xs sm:text-sm">
    {{ error?.response.data }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
