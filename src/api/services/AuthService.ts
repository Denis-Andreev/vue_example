import type { ApiLoginPayload, ApiRegisterPayload } from '@/api/models'
import { requests } from '@/api/requests'
import { envList } from '@/core/env-list'
import { setToken } from '@/api/helpers/token'

export class AuthService {
  static async login(payload: ApiLoginPayload) {
    const res = await requests().open().login(payload)
    const token = res.data.token
    setToken(token);
    return res;
  }
  static register(payload: ApiRegisterPayload) {
    return requests().open().register(payload)
  }
}