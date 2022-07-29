<script setup lang="ts">
import { useUserStore } from '@/stores/user'

useHead({
  title: 'Admin Panel',
})

const userStore = useUserStore()
</script>

<template>
  <div>
    Admin Dashboard
  </div>
  <RouterLink to="/" class="btn btn-primary">
    Home
  </RouterLink>
  <RouterLink to="/" class="btn" @click="userStore.logoff()">
    Logout
  </RouterLink>
</template>

<route lang="yaml">
meta:
  layout: admin
  requiresAuth: true
</route>
