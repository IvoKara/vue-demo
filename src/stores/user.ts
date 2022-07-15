import type { RemovableRef } from '@vueuse/core'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { defineStore } from 'pinia'

interface UserState {
  token: RemovableRef<any>
  payload: any
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

    async login(event) {
      const url = 'http://192.168.201.59:3001/login'
      const result = await axios.post(url, event)
      this.token = result.data.token
      if (this.token)
        this.payload = JSON.stringify(jwt_decode(this.token))
      // apiClient.defaults.headers.authorization = `Bearer ${result.data.token}`
    },
  },
})
