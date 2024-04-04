import BaseService from '@/shared/base.service'

import type { SignInRequest } from '@/types/request/signIn.request'
import { ref } from 'vue'

export const isLoading = ref(false)

export class AuthService {
  static async login(payload: SignInRequest) {
    try {
      isLoading.value = true
      const response = await BaseService.post('Authenticate/Login', payload)

      return response
    } catch (error: any) {
      console.error(error.message)
    } finally {
      isLoading.value = false
    }
  }

  static async me() {
    try {
      const response = await BaseService.get('Authenticate/Me')

      return response
    } catch (error: any) {
      console.error(error.message)
    }
  }
}
