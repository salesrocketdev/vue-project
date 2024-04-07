import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: localStorage.getItem('user') || ''
  }),
  getters: {
    // isAuthenticated: (state) => !!state.user
  },
  actions: {
    setUser(user: string) {
      this.user = user
      localStorage.setItem('user', user)
    },
    removeUser() {
      this.user = ''
      localStorage.removeItem('user')
    }
  }
})
