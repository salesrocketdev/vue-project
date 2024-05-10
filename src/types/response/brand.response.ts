import type { BaseEntity } from '../shared/baseType'

export interface Brand extends BaseEntity {
  name: string
  quantity: number
  brandImage: string
}
