import { ref } from 'vue'

import { CarService } from '@/services'

import { isLoading } from '@/shared/base.service'
import type { Car } from '@/types/response/car.response'

export function useCar() {
  const car = ref<Car>()
  const cars = ref<Car[]>([])

  async function getAllCars() {
    try {
      const response = await CarService.getAllCars()
      if (response) {
        cars.value = response
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getCarById(id: number) {
    try {
      const response = await CarService.getCarById(id)
      if (response) {
        car.value = response
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLoading,
    car,
    cars,
    getAllCars,
    getCarById
  }
}
