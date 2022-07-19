<script setup lang="ts">
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { InputOptions, SmallText } from '@/types'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const authStore = useUserStore()
const { isLoading } = storeToRefs(authStore)

const smallText: Ref<SmallText> = ref({
  text: 'Already have a profile?',
  link: '/login',
  linkText: 'Login here!',
})
</script>

<template>
  <Head>
    <title>Register</title>
  </Head>
  <LoginFrom
    name="Register"
    :small-text="smallText"
    :is-loading="isLoading"
    @on-submit="authStore.formRequest"
  />
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
