<script setup lang="ts">
import type { Ref } from 'vue'
import { usePostUserQuery } from '@/composables/postUserQuery'
import type { User } from '@/types'

const props = defineProps<{
  userId: any
  enabled: boolean
}>()

const refProps = toRefs(props)

const {
  data: user,
  isLoading: isUserLoading,
  isError,
  error,
} = usePostUserQuery(refProps.userId, { enabled: refProps.enabled })
</script>

<template>
  <div class="flex justify-center items-center">
    <div bg-gray-200 dark:bg-gray-6 w-13 h-13 rounded-full flex items-center justify-center>
      <div v-if="isUserLoading" i-carbon-user />
      <div v-else-if="isError" text-2xl font-bold text-red>
        {{ error }}
      </div>
      <div v-else text-2xl font-bold>
        {{ user?.name.charAt(0) }}
      </div>
    </div>
    <div ml-2>
      {{ user?.name }}
    </div>
  </div>
</template>

