import axios from 'axios'
import { useMutation } from 'vue-query'

export function useFormMutation(url, axiosInst) {
  return useMutation(data => axios.post(url, data), {
    onSuccess: ({ data }, variables, context) => {
      axiosInst.defaults.headers.authorization = `Bearer ${data.token}`
    },
  })
}
