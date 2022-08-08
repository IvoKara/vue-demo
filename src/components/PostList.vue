<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
import { usePostInfiniteQuery } from '@/composables/postQuery'

const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
} = usePostInfiniteQuery()

function onIntersectionObserver([{ isIntersecting }]) {
  if (hasNextPage?.value && !isFetchingNextPage.value && isIntersecting)
    fetchNextPage.value()
}

const breakpoints = useBreakpoints({
  '3xl': '2074px',
  '2xl': '1960px',
  'xl': '1600px',
  'lg': '1340px',
})
const md = breakpoints.smaller('lg')
const lg = breakpoints.between('lg', 'xl')
const xl = breakpoints.between('xl', '2xl')
const xxl = breakpoints.between('2xl', '3xl')
const xxxl = breakpoints['3xl']
</script>

<template>
  <div
    grid auto-rows-fr auto-cols-fr
    :class="{
      'grid-cols-4 gap-15': xxxl,
      'grid-cols-4 gap-7': xxl,
      'grid-cols-3 gap-15': xl,
      'grid-cols-2 gap-15': lg,
      'grid-cols-1 gap-15 max-w-150 p10 mx-auto': md,
    }"
    z-0 mx-60
  >
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
        <div v-for="post in page.data" :key="post.id">
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

