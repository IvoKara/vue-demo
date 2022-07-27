<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const authStore = useUserStore()

const accs = ref([])
async function getAccs() {
  accs.value = await authStore.acc()
}

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <p>This is home page</p>
    <button v-if="authStore.isLoggedIn" class="btn btn primary" @click="getAccs">
      Get Acc
    </button>
    <div v-for="acc in accs" :key="acc">
      {{ acc }}
    </div>
  </div>
</template>
