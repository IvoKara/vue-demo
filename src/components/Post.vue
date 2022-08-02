<script setup lang="ts">
import type { Ref } from 'vue'
import { usePostsQuery } from '@/composables/postQuery'

const props = defineProps<{
  id: number | string
}>()

const postId = ref(props.id)

const { data: post, error, isLoading } = usePostsQuery(postId, {
  enabled: computed(() => !!postId),
})

const userId = computed(() => post.value?.userId)
const enabled = computed(() => !!post.value?.userId)
</script>

<template>
  <article v-if="post" max-w-200 text-base-content mx-auto mt-10>
    <h1 text-2xl font-bold mb-4>
      {{ post.title }}
    </h1>
    <UserIcon
      :user-id="userId" :enabled="enabled"
      mb-3
    />
    <div mb-4>
      {{ post.body }}
    </div>
  </article>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="isLoading">
    <h1 text-2xl font-bold mb-4>
      Loading...
    </h1>
    <UserIcon
      :user-id="userId" :enabled="enabled"
      mb-3
    />
    <div mb-4>
      Loading ...
    </div>
  </div>
</template>

