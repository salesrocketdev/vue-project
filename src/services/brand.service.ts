import BaseService from '@/shared/base.service'

import type { Brand } from '@/types/response/brand.response'

export class BrandService {
  static async getAllBrands(): Promise<Brand[] | null> {
    try {
      const response = await BaseService.get<Brand[]>('Brands')

      return response ?? null
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
