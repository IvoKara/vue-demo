<script setup lang="ts">
import type { Post } from '@/types'

const props = defineProps(['content'])

const post: Post | null = props.content
const imageLoaded = ref(false)
</script>

<template>
  <div
    class="
      card card-normal
      w-96 h-140
      bg-primary text-primary-content
      shadow-lg dark:shadow-stone-700
      transition-dark-light"
  >
    <figure w="400px" h="250px">
      <img
        src="https://picsum.photos/400/250"
        alt="Picture"
        :class="imageLoaded === true ? 'opacity-100' : 'opacity-0'"
        transition-all duration="1000" ease-in-out
        @load="imageLoaded = true"
      >
    </figure>
    <div class="card-body">
      <h2 v-if="post" class="card-title text-left">
        {{ `${post.id} ${post?.title}` }}
      </h2>
      <h2 v-else class="card-title text-left">
        Loading...
      </h2>
      <p v-if="post">
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
