import { envList } from '@/core/env-list'
import type { ApiLoginPayload, ApiLoginResponse, ApiRegisterPayload } from '@/api/models'
import paths from '@/api/paths'
import { instanceAxiosClose, instanceAxiosOpen } from '@/api/instance'
import type { User } from '@/api/models/user'

export const requests = () => {
  const mainKey = envList.tokenKey
  const token = localStorage.getItem(mainKey)
  return {
    open: () => ({
      login: (body: ApiLoginPayload) => instanceAxiosOpen().post<ApiLoginResponse>(paths.login, body),
      register: (body: ApiRegisterPayload) => instanceAxiosOpen().post(paths.register, body),
    }),
    close: () => ({
      getUserInfo: (id: string) => instanceAxiosClose(token).get<User>(paths.user(id)),
    })
  }
}