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
        <div class="bg-neutral-focus text-neutral-content rounded-full ">
          <RouterLink to="/login">
            <div i-mdi:login scale="~ 50px" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="avatar placeholder" cursor-pointer @click="userStore.logoff()">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
          <span class="text-base">
            {{ JSON.parse(payload).username.charAt(0) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
