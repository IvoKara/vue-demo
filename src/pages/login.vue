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

const smallText: Ref<SmallText> = ref({
  text: 'Don\'t have a profile?',
  link: '/register',
  linkText: 'Register now!',
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
