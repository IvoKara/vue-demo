<script setup lang="ts">
import { useUserStore } from '@/stores/user'

useHead({
  title: 'Dashboard',
})

const userStore = useUserStore()
</script>

<template>
  <AdminPanelHeading>
    Dashboard
  </AdminPanelHeading>
  <div>
    Admin Dashboard
  </div>
  <RouterLink to="/" class="btn btn-primary">
    Home
  </RouterLink>
  <RouterLink to="/" class="btn" @click="userStore.logoff()">
    Logout
  </RouterLink>
  <div class="btn btn-primary">
    explore transform
  </div>
</template>

<route lang="yaml">
meta:
  layout: admin
  requiresAuth: true
</route>
