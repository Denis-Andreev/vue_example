import { defineStore } from 'pinia'
import type { ApiLoginPayload } from '@/api/models'
import { AuthService } from '@/api/services/AuthService'

interface LoginStoreState {
  loading: boolean;
  error: boolean;
}

const initialState: LoginStoreState = {
  loading: false,
  error: false,
}

interface LoginPayload {
  data: ApiLoginPayload,
  onSuccess?: () => void;
}

export const useLoginStore
  = defineStore('loginStore',  {
  state: () => initialState,
  actions: {
    setError(error: boolean) {
      this.error = error;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    async login(payload: LoginPayload) {
      this.error = false;
      this.loading = true;
      try {
        await AuthService.login(payload.data)
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