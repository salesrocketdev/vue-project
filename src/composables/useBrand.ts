import { ref } from 'vue'

import { BrandService } from '@/services'

import { isLoading } from '@/shared/base.service'

import type { Brand } from '@/types/response/brand.response'

export function useBrand() {
  const brands = ref<Brand[]>([])

  async function getAllBrands() {
    try {
      const response = await BrandService.getAllBrands()
      if (response) {
        brands.value = response
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLoading,
    brands,
    getAllBrands
  }
}
