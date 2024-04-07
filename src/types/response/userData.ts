import type { BaseEntity } from '../shared/baseType'

export interface UserData extends BaseEntity {
  name: string
  age: number
  phone: string
  email: string
  document: {
    customerId: number
    taxNumber: string
    rg: string | null
    driverLicenseNumber: string | null
  }
}
