<script setup lang="ts">
import type { Ref } from 'vue'

onMounted(() => {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
})

useHead({
  title: 'Blog',
})
</script>

<template>
  <div>
    <PageHeading>Blog</PageHeading>
    <!-- <input
      id="" v-model="slug" type="number" name="slug" min="0" max="100"
      border-2 p-2 m-2
      rounded-lg
      border-gray-200
    >

    <ClientOnly> -->
    <!-- <div v-if="slug !== 0">
        <div v-if="post">
          <h1 text-2xl font-bold mb-4>
            {{ post.title }}
          </h1> -->
    <!-- <div bg-gray-200 w-18 h-18 rounded-full flex items-center justify-center>
            <div v-if="isUserLoading" i-carbon-user />
            <div v-else-if="isError" text-2xl font-bold text-red>
              {{ error }}
            </div>
            <div v-else text-2xl font-bold>
              {{ user?.name.charAt(0) }}
            </div>
          </div> -->
    <!-- <div>
            {{ post.body }}
          </div>
        </div>
      </div> -->
    <PostList />
    <!-- fixed bottom-0 right-7
        transition-all-1000 ease="cubic-bezier(0.76, 0.01, 0.04, 0.94)"
        style="transform: translate3d(0px, 200%, 10px)" -->
    <!-- <ClientOnly>
      <div v-if="scrollByY">
        <div
          class="btn btn-secondary"
          fixed bottom-4 right="1.5rem"
          transition-transform-1000 transition="cubic-bezier(0.76, 0.01, 0.04, 0.94)"
          transform-gpu
          :style="{
            transform: scrollByY > 0 ? 'none' : 'translate3d(0px, 200%, 10px)',
          }"
          @click="backToTop"
        >
          top
        </div>
      </div>
    </ClientOnly> -->
  </div>
</template>
