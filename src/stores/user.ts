import type { RemovableRef } from '@vueuse/core'
import axios from 'axios'
import { defineStore } from 'pinia'

interface UserState {
  token: RemovableRef<any>
  payload: any
  isLoading?: boolean
  errors?: any[]
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: useStorage('token', null),
    payload: useStorage('payload', null),
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
      return result?.data
    },
  },
})
