import axios from 'axios'

export const axiosInstance = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://localhost:3001',
})
