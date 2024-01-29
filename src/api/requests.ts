import { envList } from '@/core/env-list'
import type { ApiLoginPayload } from '@/api/models'
import paths from '@/api/paths'
import { instanceAxiosClose, instanceAxiosOpen } from '@/api/instance'

export const instance = () => {
  const mainKey = envList.tokenKey
  const token = localStorage.getItem(mainKey)
  return {
    open: () => ({
      login: (body: ApiLoginPayload) => instanceAxiosOpen().post(paths.login, body),
      register: (body: ApiLoginPayload) => instanceAxiosOpen().post(paths.register, body),
    }),
    close: () => ({
      events: () => instanceAxiosClose(token).get(paths.refresh),
    })
  }
}