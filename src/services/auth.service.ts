import BaseService from '@/shared/base.service'
import type { SignInRequest } from '@/types/request/signIn'

import type { AuthToken } from '@/types/response/authToken'
import type { UserData } from '@/types/response/userData'

export class AuthService {
  static async login(payload: SignInRequest): Promise<AuthToken | null> {
    try {
      const response = await BaseService.post<AuthToken>('Authenticate/Login', payload)
      return response ?? null
    } catch (error) {
      console.error('Error in login:', error)
      return null
    }
  }

  static async me(): Promise<UserData | null> {
    try {
      const response = await BaseService.get<UserData>('Authenticate/Me')
      return response ?? null
    } catch (error) {
      console.error('Error in me:', error)
      return null
    }
  }

  static async logout() {
    try {
      const response = await BaseService.post('Authenticate/Logout')
      return response
    } catch (error) {
      console.error('Error in logout:', error)
      return false
    }
  }

  // static async me() {
  //   try {
  //     const response = await BaseService.get('Authenticate/Me')

  //     return response
  //   } catch (error: any) {
  //     console.error(error.message)
  //   }
  // }

  // static async logout() {
  //   try {
  //     const response = await BaseService.post('Authenticate/Logout')

  //     return response
  //   } catch (error: any) {
  //     console.error(error.message)
  //   }
  // }
}
