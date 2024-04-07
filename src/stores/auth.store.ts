import { defineStore } from 'pinia'

import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt_token') || ''
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('jwt_token', token)
    },
    removeToken() {
      this.token = ''
      localStorage.removeItem('jwt_token')
    },
    handleLogout() {
      this.removeToken()
      router.replace({ name: 'sign-in' })
    },
    handleUnauthorized() {
      this.removeToken()
      router.replace({ name: 'sign-in' })
    }
  }
})
