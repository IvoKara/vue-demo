import { useMutation } from 'vue-query'
import { axiosInstance } from '@/api/axiosInstance'

export function usePostMutation(url) {
  return useMutation(data => axiosInstance.value.post(url, data), {
    onSuccess: ({ data }, variables, context) => { // eslint-disable-line @typescript-eslint/no-unused-vars
      console.log(data)
    },
    // onError: (error, variables, context) => {
    //   console.log(context)
    // },
  })
}
