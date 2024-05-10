import type { MaskitoOptions } from '@maskito/core'

export const cpfMask: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
}

export const phoneMask: MaskitoOptions = {
  mask: ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
