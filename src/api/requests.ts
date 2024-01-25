import { envList } from '@/core/env-list'
import type { ApiAuthPayload } from '@/api/models'
import paths from '@/api/paths'
import { instanceAxiosClose, instanceAxiosOpen } from '@/api/instance'

export const instance = () => {
  const mainKey = envList.tokenKey
  const token = localStorage.getItem(mainKey)
  return {
    open: () => ({
      auth: (body: ApiAuthPayload) => instanceAxiosOpen().post(paths.auth, body)
    }),
    close: () => ({
      events: () => instanceAxiosClose(token).get(paths.refresh),
    })
  }
}