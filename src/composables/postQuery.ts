import { useInfiniteQuery, useQuery } from 'vue-query'
import { axiosInstance } from '@/api/axiosInstance'

export function usePostsQuery(slug, { enabled }) {
  return useQuery(
    ['posts', slug],
    () => axiosInstance.value.get(slug.value == null ? '/posts' : `/posts/${slug.value}`),
    {
      enabled,
      select: post => post.data,
    },
  )
}
const fetchPosts = ({ pageParam = 1 }) => axiosInstance.value.get(`/posts?_page=${pageParam}`)

export function usePostInfiniteQuery() {
  return useInfiniteQuery(
    'posts',
    fetchPosts,
    {
      getNextPageParam: (lastPage, pages) => {
        const nextPage = (lastPage.data[lastPage.data.length - 1].id / 10) + 1
        const maxPage = Number(lastPage.headers['x-total-count']) / 10
        return maxPage < nextPage
          ? false
          : nextPage
      },
    },
  )
}
