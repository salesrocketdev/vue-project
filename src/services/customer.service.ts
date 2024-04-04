import BaseService from '@/shared/base.service'

import type { SignUpRequest } from '@/types/request/signUp.request'

export class CustomerService {
  static async createCustomer(payload: SignUpRequest) {
    try {
      const response = await BaseService.post('Customers', payload)

      return response
    } catch (error) {
      console.error(error)
    }
  }
}
