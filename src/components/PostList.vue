<script setup lang="ts">
import type { Ref } from 'vue'
import type { Post } from '@/types'
import { indexPosts } from '@/api/postsEndpoints'
import { usePostsQuery } from '@/composables/postQuery'

const postId = ref(null)
const { data, error, isFetching, isLoading } = usePostsQuery(postId, {
  enabled: computed(() => !!postId),
})
</script>

<template>
  {{ isFetching }}

  <div flex flex-wrap gap-4 z-0 flex-1>
    <div v-if="isLoading" text-2xl mx-auto text-info-content>
      Loading...
    </div>
    <div v-else-if="error" text-2xl mx-auto text-red>
      {{ `Error: ${error}` }}
    </div>
    <div v-for="post in data" v-else :key="post.id" mx-auto>
      <PostCard :content="post" />
    </div>
  </div>
</template>

