<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { payload } = storeToRefs(userStore)
</script>

<template>
  <div>
    <div v-if="!userStore.isLoggedIn">
      <div class="avatar placeholder" cursor-pointer @click="userStore.logoff()">
        <div class="bg-base-content transition-dark-light text-base-100 rounded-full ">
          <RouterLink to="/admin">
            <div i-mdi:user scale="~ 50px" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="avatar placeholder" cursor-pointer @click="userStore.logoff()">
        <div
          class="bg-base-content text-base-100
            ring-primary-focus ring-2 ring-offset-base-100
          transition-dark-light rounded-full w-10"
        >
          <span class="text-base">
            {{ JSON.parse(payload)?.username.charAt(0) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
