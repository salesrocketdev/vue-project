import { ref } from 'vue'

import axios from '@/boot/axios'

import { type AxiosResponse } from 'axios'

import type { ApiResponse } from '@/types/shared/apiResponse'

import { useToastStore } from '@/stores/toast.store'

export const isLoading = ref(false)

export default class BaseService {
  static async get<T>(endpoint: string, params?: any): Promise<T | null> {
    try {
      isLoading.value = true
      const response: AxiosResponse<ApiResponse<T>> = await axios.get(endpoint, { params })
      if (response.data.code === 1) {
        return response.data.data || null
      } else {
        console.error('GET request failed:', response.data.message)
        return null
      }
    } catch (error: any) {
      useToastStore().show(error.response.data.message)
      console.error('Error in GET request:', error)

      return null
    } finally {
      isLoading.value = false
    }
  }

  static async post<T>(endpoint: string, data?: any): Promise<T | null> {
    try {
      isLoading.value = true
      const response: AxiosResponse<ApiResponse<T>> = await axios.post(endpoint, data)
      if (response.data.code === 1) {
        return response.data.data || null
      } else {
        console.error('POST request failed:', response.data.message)
        return null
      }
    } catch (error: any) {
      useToastStore().show(error.response.data.message)
      console.error('Error in POST request:', error)

      return null
    } finally {
      isLoading.value = false
    }
  }
}
