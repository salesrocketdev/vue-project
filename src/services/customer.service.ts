import BaseService from '@/shared/base.service'

import type { SignUpRequest } from '@/types/request/signUp'
import type { UserData } from '@/types/response/userData'

export class CustomerService {
  static async createCustomer(payload: SignUpRequest): Promise<UserData | null> {
    try {
      const response = await BaseService.post<UserData>('Customers', payload)

      return response ?? null
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
