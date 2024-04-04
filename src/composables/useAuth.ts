// useAuth.ts
import { AuthService, CustomerService } from '@/services'

import type { SignInRequest } from '@/types/request/signIn.request'

import type { SignUpRequest } from '@/types/request/signUp.request'

import { isLoading } from '../services/auth.service'

export function useAuth() {
  async function signIn(payload: SignInRequest) {
    try {
      const response = await AuthService.login(payload)

      if (response?.data) await GetUserMeta()

      return response?.data
    } catch (error) {
      console.error(error)
    }
  }

  async function signUp(payload: SignUpRequest) {
    try {
      const response = await CustomerService.createCustomer(payload)

      return response?.data
    } catch (error) {
      console.error(error)
    }
  }

  async function GetUserMeta() {
    try {
      const response = await AuthService.me()

      return response?.data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLoading,
    signIn,
    signUp
  }
}
