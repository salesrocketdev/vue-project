import type { BaseEntity } from '../shared/baseType'

import type { Brand } from './brand.response'

import type { FuelType, TransmissionType } from '@/enums'

export interface Car extends BaseEntity {
  model: string
  year: number
  color: string
  seatsNumber: number
  plate: string
  dailyValue: number
  available: boolean
  brand: Brand
  carImages: CarImage[]
  fuelType: FuelType
  transmissionType: TransmissionType
}

interface CarImage {
  id: number
  carId: number
  link: string
  isPrimary: boolean
}
