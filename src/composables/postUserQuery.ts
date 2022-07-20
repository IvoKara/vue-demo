import { useQuery } from 'vue-query'
import { axiosInstance } from '@/api/axiosInstance'

export function usePostUserQuery(userId, { enabled }) {
  return useQuery(['user', userId],
    () => axiosInstance.get(`/users/${userId.value}`),
    {
      enabled,
      select: user => user.data,
    },
  )
}
