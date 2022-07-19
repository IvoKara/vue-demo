<script setup lang="ts">
// const title = ref('Home')

import { useUserStore } from '@/stores/user'

// import { Head } from '@vueuse/head'
const authStore = useUserStore()
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <main>
    This is home page
    <button v-if="useUserStore().isLoggedIn" class="btn btn primary" @click="authStore.acc">
      Get Acc
    </button>
  </main>
</template>
