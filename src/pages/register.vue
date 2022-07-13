<script setup lang="ts">
import type { Ref } from 'vue'
import type { InputOptions, SmallText } from '@/types'

function register() {
  alert('registring you')
}

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
</script>

<template>
  <LoginFrom
    name="Register"
    :input-options="inputOptions"
    :small-text="smallText"
    @on-submit="register"
  />
</template>

<route lang="yaml">
meta:
  layout: signin
</route>
