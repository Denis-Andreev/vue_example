import { defineStore } from 'pinia'
import { checkToken, deleteToken } from '@/api/helpers/token'
import router from '@/router'

interface AppStateStoreState {
  isAuth: boolean;
}

const initialState: AppStateStoreState = {
 isAuth: false
}
export const useAppStateStore
  = defineStore('appStateStore',  {
  state: () => initialState,
  actions: {
    setIsAuth(isAuth: boolean) {
      this.isAuth = isAuth;
    },
    checkAuth() {
      const isAuth = checkToken();
      this.setIsAuth(isAuth)
    },
    logout() {
      deleteToken();
      router.push('/login')
      this.setIsAuth(false)
    }
  },
})