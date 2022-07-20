<script setup lang="ts">
// const title = ref('Home')

import { axiosInstance } from '@/api/axiosInstance'
import { useUserStore } from '@/stores/user'

// import { Head } from '@vueuse/head'
const authStore = useUserStore()

const accs = ref([])
async function getAccs() {
  accs.value = await authStore.acc()
}
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <main>
    This is home page
    <button v-if="authStore.isLoggedIn" class="btn btn primary" @click="getAccs">
      Get Acc
    </button>
    <div v-for="acc in accs" :key="acc">
      {{ acc }}
    </div>
  </main>
</template>
