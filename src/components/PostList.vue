<!-- eslint-disable @typescript-eslint/consistent-type-imports -->
<script setup lang="ts">
import type { Ref } from 'vue'
import type { Post } from '@/types'

const url = ref('https://jsonplaceholder.typicode.com/posts')
const loading: Ref<boolean> = ref(false)
const posts: Ref<Post[]> = ref([])
const err: Ref<Error | null> = ref(null)

const { data, isFetching } = useFetch(url).get().json()

// loading.value = isFetching.value
// err.value = error.value

// async function fetchData() {
//   const { isFetching, error, data } = await useFetch(url).json()
// }

// try {
//   // if (!resp.ok)
//   //   throw new Error('404')
// console.log(error)
// console.log(data.value)
//   if (statusCode.value !== 200)
//     err.value = error.value as Error
//   // if (data.value === {})
//   //   throw new Error('404')
//   // console.log(isFetching.value)
//   // console.log(error.value)
//   // console.log(data.value)
// }
// catch (e: any) {
//   err.value = e as Error
//   console.log(err)
// }
// finally {
//   loading.value = false
// }
// }
</script>

<template>
  <div flex flex-wrap gap-4 z-0 flex-1>
    <div v-if="isFetching" text-2xl mx-auto text-info-content>
      Loading...
    </div>
    <div v-else-if="err" text-2xl mx-auto text-red>
      {{ `Error: ${err}` }}
    </div>
    <div v-for="post in data" v-else :key="post.id" mx-auto>
      <PostCard :content="post" />
    </div>
    <!-- <div >
    </div> -->
  </div>
</template>

