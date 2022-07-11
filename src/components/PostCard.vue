<script setup lang="ts">
import type { Post } from '@/types'

const props = defineProps<{
  content: Post
}>()

const post: Post = props.content
</script>

<template>
  <div v-if="post" class="card card-normal w-96 bg-primary text-primary-content shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"></figure>
    <div class="card-body">
      <h2 class="card-title text-left ">
        {{ post?.title }}
      </h2>
      <p>{{ post?.body?.slice(0, 100).concat('...') }}</p>
      <div class="card-actions justify-end">
        <router-link
          :to="`/blog/${post?.id}`" class="btn btn-primary-content"
        >
          Read more
        </router-link>
      </div>
    </div>
  </div>
</template>
