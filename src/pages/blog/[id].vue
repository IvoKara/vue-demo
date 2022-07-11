<script setup lang="ts">
import type { Ref } from 'vue'
import type { Post } from '@/types'

const route = useRoute()
const visits = useStorage('visits', 0)
const loading = ref(false)
const error: Ref<Error | null> = ref(null)
const post: Ref<Post | null> = ref(null)

onMounted(() => {
  visits.value = visits.value + 1
  fetchData()
})

async function fetchData() {
  post.value = error.value = null
  loading.value = true
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

    if (!resp.ok)
      throw new Error('404')

    const data = await resp.json()
    if (!data)
      throw new Error('err')

    post.value = data

    const resp2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.value?.userId}`)
    const data2 = await resp2.json()
    if (!data2)
      throw new Error('err')

    post.value.user = data2
  }
  catch (e: any) {
    error.value = e as Error
  }
  finally {
    loading.value = false
  }
}
watch(
  () => route.params,
  () => fetchData(),
  { immediate: true })
</script>

<template>
  Hello {{ route.params.slug }}
  {{ visits }}

  <RouterLink
    to="/blog" class="btn btn-primary
  "
  >
    Back
  </RouterLink>
  <article v-if="post" prose text-base-content mx-auto>
    <h1 text-2xl>
      {{ post.title }}
    </h1>
    <small>by {{ post.user.name }}</small>

    <p>
      {{ post.body }}
    </p>
  </article>
  <div v-else>
    Loading ...
  </div>
</template>
