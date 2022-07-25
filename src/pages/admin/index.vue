<script setup lang="ts">
useHead({
  title: 'Admin Panel',
})
</script>

<template>
  <div>
    Admin Dashboard
  </div>
</template>

<route lang="yaml">
meta:
  layout: admin
  requiresAuth: true
</route>
