import type { ApiLoginPayload, ApiRegisterPayload } from '@/api/models'
import { instance } from '@/api/requests'

class AuthService {
  login(data: ApiLoginPayload) {
    return instance().open().login(data)
  }
  register(data: ApiRegisterPayload) {
    return instance().open().register(data)
  }
}

export default new AuthService();