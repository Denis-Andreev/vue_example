import { defineStore } from 'pinia'
import AuthService from '@/api/services/AuthService'
import type { ApiLoginPayload } from '@/api/models'
import { useRoute } from 'vue-router'

interface RegisterStoreState {
  loading: boolean;
  error: boolean;
}

const initialState: RegisterStoreState = {
  loading: false,
  error: false,
}

export const useRegisterStore = defineStore('counter', () => {
  const route = useRoute()
  return {
    state: () => initialState,
    actions: {
      setError(error: boolean) {
        this.error = error;
      },
      setLoading(loading: boolean) {
        this.loading = loading;
      },
      async register(payload: ApiLoginPayload) {
        this.loading = true;
        try {
          await AuthService.register(payload)
          void route.push('/login')
        } catch {
          this.setError(true)
        } finally {
          this.setLoading(false)
        }
      },
    },
  }
})