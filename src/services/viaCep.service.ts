// services/ViaCEPService.ts
import BaseService from '@/shared/base.service'

const VIA_CEP_API_URL = 'https://viacep.com.br/ws/'

export default class ViaCEPService {
  static async fetchAddressByCEP(cep: string) {
    return BaseService.get(`${VIA_CEP_API_URL}${cep}/json`)
  }
}
