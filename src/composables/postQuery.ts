import { useQuery } from 'vue-query'
import { axiosInstance } from '@/api/axiosInstance'

export function usePostsQuery(slug, { enabled }) {
  return useQuery(
    ['posts', slug],
    () => axiosInstance.get(slug.value == null ? '/posts' : `/posts/${slug.value}`),
    {
      enabled,
      select: post => post.data,
    },
  )
}
