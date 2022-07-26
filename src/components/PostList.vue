<script setup lang="ts">
import type { Ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import type { Post } from '@/types'
import { usePostInfiniteQuery, usePostsQuery } from '@/composables/postQuery'

// const postId = ref(null)
// const { data, error, isFetching, isLoading } = usePostsQuery(postId, {
//   enabled: computed(() => !!postId),
// })

const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isLoading,
  isError,
} = usePostInfiniteQuery()

const target = ref(null)
const isVisible = ref(false)
function onIntersectionObserver([{ isIntersecting }]) {
  if (hasNextPage?.value && !isFetchingNextPage.value && isIntersecting)
    fetchNextPage.value()
}
</script>

<template>
  <div flex flex-wrap gap-4 z-0 flex-1>
    <template v-if="isLoading">
      <div v-for="n in 10" :key="n" mx-auto>
        <PostCard />
      </div>
    </template>
    <div v-else-if="error" text-2xl mx-auto text-red>
      {{ `Error: ${error}` }}
    </div>
    <template v-else>
      <template v-for="page in data?.pages" :key="page.id">
        <div v-for="post in page.data" :key="post.id" mx-auto>
          <PostCard :content="post" />
        </div>
      </template>
    </template>
  </div>
  <hr my-10>
  <button
    v-if="!isLoading"
    v-intersection-observer="onIntersectionObserver"
    my-4
    mt-6
    class="btn btn-primary"
    :disabled="!hasNextPage || isFetchingNextPage"
    @click="() => fetchNextPage()"
  >
    <span v-if="isFetchingNextPage">Loading more...</span>
    <span v-else-if="hasNextPage">Load More</span>
    <span v-else>Nothing more to load</span>
  </button>
</template>

