<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Post } from '@/types'

const props = defineProps(['content'])

const post: Post | null = props.content
const imageLoaded = ref(false)

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
</script>

<template>
  <div
    class="
      card card-normal
      h-full
      bg-primary text-primary-content
      shadow-lg dark:shadow-stone-700
      transition-dark-light"
  >
    <figure max-w="400px" max-h="250px">
      <img
        src="https://picsum.photos/400/250"
        alt="Picture"
        :class="imageLoaded === true ? 'opacity-100' : 'opacity-0'"
        transition-all duration="1000" ease-in-out
        @load="imageLoaded = true"
      >
    </figure>
    <div class="card-body">
      <h2>
        <span v-if="post" class="card-title text-left  md:!text-xl sm:!text-lg !text-base">
          {{ `${post.id} ${post?.title}` }}
        </span>
        <span v-else class="card-title text-left">
          Loading...
        </span>
      </h2>
      <p v-if="post" sm:text-base text-sm text-left>
        {{ post?.body?.slice(0, 100).concat('...') }}
      </p>
      <p v-else>
        Loading content...
      </p>
      <div class="card-actions justify-end">
        <RouterLink
          :to="`/blog/${post?.id}`" class="btn btn-primary-content"
        >
          Read more
        </RouterLink>
      </div>
    </div>
  </div>
</template>
