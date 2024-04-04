// services/BaseService.ts
import axios from '@/boot/axios'

import type { AxiosError } from 'axios'

import { useToastStore } from '@/stores/toast.store'

const toast = useToastStore()

export default class BaseService {
  static async get(endpoint: string, params?: any) {
    const response = await axios.get(endpoint, { params })
    return response
  }

  static async post(endpoint: string, data?: any) {
    try {
      const response = await axios.post(endpoint, data)

      return response
    } catch (error: any) {
      const errorObject: AxiosError = error

      const message = errorObject.message || 'Ocorreu um erro durante a requisição.'
      toast.show(message)
    }
  }
}
