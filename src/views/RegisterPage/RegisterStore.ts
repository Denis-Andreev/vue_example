import { defineStore } from 'pinia'
import type { ApiRegisterPayload } from '@/api/models'
import { AuthService } from '@/api/services/AuthService'

interface RegisterStoreState {
  loading: boolean;
  error: boolean;
}

const initialState: RegisterStoreState = {
  loading: false,
  error: false,
}

interface RegisterPayload {
  data: ApiRegisterPayload,
  onSuccess?: () => void;
}

export const useRegisterStore = defineStore('registerStore',  {
    state: () => initialState,
    actions: {
      setError(error: boolean) {
        this.error = error;
      },
      setLoading(loading: boolean) {
        this.loading = loading;
      },
      async register(payload: RegisterPayload) {
        this.error = false;
        this.loading = true;
        try {
          await AuthService.register(payload.data)
          payload?.onSuccess && payload.onSuccess()
        } catch (e) {
          console.error(e);
          this.setError(true)
        } finally {
          this.setLoading(false)
        }
      },
    },
  })