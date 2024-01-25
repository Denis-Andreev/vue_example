import type { ApiAuthPayload } from '@/api/models'

class AuthService {
  login(data: ApiAuthPayload) {
    console.log(data)
  }
  auth(data: ApiAuthPayload) {
    console.log(data)
  }
}