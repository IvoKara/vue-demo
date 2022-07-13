<script setup lang="ts">
import type { Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { Post } from '@/types'
import { showPost } from '@/api/postsEndpoints'

const route = useRoute()
const { data, isLoading, isFinished } = showPost(route.params.id)
// const loading: Ref<boolean> = isFinished
// const error: Ref<Error | null> = ref(null)
const post: MaybeRef<Post> = data

// async function fetchData() {
//   post.value = error.value = null
//   loading.value = true
//   try {
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

//     if (!resp.ok)
//       throw new Error('404')

//     const data = await resp.json()
//     if (!data)
//       throw new Error('err')

//     post.value = data

//     const resp2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.value?.userId}`)
//     const data2 = await resp2.json()
//     if (!data2)
//       throw new Error('err')

//     post.value.user = data2
//   }
//   catch (e: any) {
//     error.value = e as Error
//   }
//   finally {
//     loading.value = false
//   }
// }
// watch(
//   () => route.params,
//   () => fetchData(),
//   { immediate: true })
</script>

<template>
  {{ isFinished }}
  {{ isLoading }}
  {{ data }}
  <RouterLink
    to="/blog" class="btn btn-primary"
  >
    Back
  </RouterLink>
  <article v-if="isFinished" prose text-base-content mx-auto>
    <h1 text-2xl>
      {{ data.title }}
    </h1>
    <small>by USER</small>

    <p>
      {{ post.body }}
    </p>
  </article>
  <div v-else>
    Loading ...
  </div>
</template>
