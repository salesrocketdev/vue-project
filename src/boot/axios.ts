import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

instance.interceptors.request.use(
  (config) => {
    const token = useAuthStore().token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const authRoute = '/Auth' // Define a palavra chave para rotas de autenticação

    // Verifica se a rota da requisição não contém a palavra 'Auth'
    if (!error.config.url || error.config.url.indexOf(authRoute) === -1) {
      // Se o erro for de status 401 (Unauthorized), executa o tratamento
      if (error.response && error.response.status === 401) {
        useAuthStore().handleUnauthorized()
      }
    }

    return Promise.reject(error)
  }
)

export default instance
