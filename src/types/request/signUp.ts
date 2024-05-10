export interface SignUpRequest {
  name: string
  age: number
  phone: string
  email: string
  document: {
    taxNumber: string
  }
  password: string
  passwordConfirm: string
}
