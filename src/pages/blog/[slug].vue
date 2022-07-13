<script setup lang="ts">
import type { Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { Post, User } from '@/types'
import { showPost } from '@/api/postsEndpoints'
import { showUser } from '@/api/usersEndpoints'

const props = defineProps<{
  slug: string
}>()

const userId = ref(-1)

const postPromise = showPost(props.slug)
  .then((resp) => {
    const post: MaybeRef<Post> = ref(resp.data.value)

    const res = showUser(resp.data.value.userId)
    const user: Ref<User> = res.data as Ref<User>

    unref(post).user = user.value
    return {
      post: ref(post),
    }
  })

// /* const user: MaybeRef<User> */
// const promise2 = showUser(userId)
// //   .then(response => response.data)
//   .then((data) => { console.log(data) })
// console.log(user.value)

const user: Ref<User> = showUser(userId).data
// getUser()
// async function getUser() {
//   await promise
//     .then(response => response.data?.value.userId)
//     .then((id) => {
//       userId.value = id
//     })
// }
</script>

<template>
  {{ userId }}
  <RouterLink
    to="/blog" class="btn btn-primary"
  >
    Back
  </RouterLink>

  <article prose text-base-content mx-auto>
    <h1 text-2xl />
    <small>by {{ user }}</small>

    <p />
  </article>
</template>
