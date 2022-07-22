import axios from 'axios'

const inst = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // baseURL: 'http://localhost:3001',

})

export const axiosInstance = ref(inst)
