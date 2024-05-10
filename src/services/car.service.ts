import BaseService from '@/shared/base.service'

import type { Car } from '@/types/response/car.response'

export class CarService {
  static async getAllCars(): Promise<Car[] | null> {
    try {
      const response = await BaseService.get<Car[]>('Cars')

      return response ?? null
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static async getCarById(id: number): Promise<Car | null> {
    try {
      const response = await BaseService.get<Car>(`Cars/${id}`)

      return response ?? null
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
