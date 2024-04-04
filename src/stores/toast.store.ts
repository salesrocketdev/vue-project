import { defineStore } from 'pinia'

export const useToastStore = defineStore({
  id: 'toast',
  state: () => ({
    isVisible: false,
    message: ''
  }),
  actions: {
    show(message: string) {
      this.isVisible = true
      this.message = message

      setTimeout(() => {
        this.hide()
      }, 5000)
    },
    hide() {
      this.isVisible = false
      this.message = ''
    }
  }
})
