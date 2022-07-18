import type { RemovableRef } from '@vueuse/core'
import type { Axios } from 'axios'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { defineStore } from 'pinia'

interface UserState {
  token: RemovableRef<any>
  payload: any
  isLoading: boolean
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: useStorage('token', null),
    payload: useStorage('payload', null),
    isLoading: false,
  }),
  getters: {
    isLoggedIn(state) {
      return state.token !== null
    },
  },
  actions: {
    async logoff() {
      this.token = null
      this.payload = null
    },

    async login(event) {
      const url = 'http://192.168.201.59:3001/login'
      this.isLoading = true
      const prom = axios.post(url, event)
      const result = await prom
      this.isLoading = await prom.then(() => false)
      this.token = result.data.token
      if (this.token)
        this.payload = JSON.stringify(jwt_decode(this.token))
      // apiClient.defaults.headers.authorization = `Bearer ${result.data.token}`
    },

    async register(event) {
      const url = 'http://192.168.201.59:3001/register'
      this.isLoading = true
      const prom = axios.post(url, event)
      const result = await prom
      this.isLoading = await prom.then(() => false)
      this.token = result.data.token
      if (this.token)
        this.payload = JSON.stringify(jwt_decode(this.token))
    },

    async acc() {
      if (this.token === null)
        return
      const api = axios.create({
        baseURL: 'http://192.168.201.59:3001',
        headers: {
          authorization: `Bearer ${this.token}`,
        },
      })
      const result = await api.get('acc')
      console.log(result?.data)
    },
  },
})
