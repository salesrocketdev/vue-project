import { AuthService, CustomerService } from '@/services'

import { isLoading } from '@/shared/base.service'

import { useAuthStore, useUserStore } from '@/stores'

import type { SignInRequest } from '@/types/request/signIn'

import type { SignUpRequest } from '@/types/request/signUp'

export function useAuth() {
  async function signIn(payload: SignInRequest) {
    try {
      const response = await AuthService.login(payload)

      if (response) {
        useAuthStore().setToken(response.token)
        await GetUserMeta()
      }

      return response
    } catch (error) {
      console.error(error)
    }
  }

  async function signUp(payload: SignUpRequest) {
    try {
      const response = await CustomerService.createCustomer(payload)

      return response
    } catch (error) {
      console.error(error)
    }
  }

  async function GetUserMeta() {
    try {
      const response = await AuthService.me()
      if (response) {
        const userData = JSON.stringify(response)
        useUserStore().setUser(userData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function logout() {
    try {
      await AuthService.logout()

      useUserStore().removeUser()
      useAuthStore().handleLogout()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLoading,
    signIn,
    signUp,
    logout
  }
}
