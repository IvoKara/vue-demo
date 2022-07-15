<script setup lang="ts">
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { InputOptions, SmallText } from '@/types'
import { useUserStore } from '@/stores/user'
import router from '@/router'

function register() {
  alert('registring you')
}
const userStorage = useUserStore()
const { isLoggedin } = storeToRefs(userStorage)

const inputOptions: Ref<InputOptions[]> = ref([
  { label: 'Username', type: 'text', placeholder: 'Username' },
  { label: 'Email', type: 'email', placeholder: 'Email' },
  { label: 'Password', type: 'password', placeholder: 'Password' },
])

const smallText: Ref<SmallText> = ref({
  text: 'Already have a profile?',
  link: '/login',
  linkText: 'Login here!',
})

onBeforeMount(() => {
  if (isLoggedin)
    router.push('/')
})
</script>

<template>
  <Head>
    <title>Register</title>
  </Head>
  <LoginFrom
    name="Register"
    :input-options="inputOptions"
    :small-text="smallText"
    :
    @on-submit="register"
  />
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
