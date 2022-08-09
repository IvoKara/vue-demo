import axios from 'axios'

const inst = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://jsonplaceholder.typicode.com'
    : 'http://localhost:3000',
})

export const axiosInstance = ref(inst)
