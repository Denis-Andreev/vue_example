import { defineStore } from 'pinia'
import type { Post } from '@/api/models/posts'
import { PostsService } from '@/api/services/PostsService'
import { UserService } from '@/api/services/UserService'
import { decodeToken } from '@/api/helpers/token'
import type { User } from '@/api/models/user'

interface LoginStoreState {
  loading: boolean;
  error: boolean;
  user?: User;
}

const initialState: LoginStoreState = {
  loading: false,
  error: false,
  user: undefined
}
export const useProfileStore
  = defineStore('profileStore', {
  state: () => initialState,
  actions: {
    setError(error: boolean) {
      this.error = error
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setUser(user: User) {
      this.user = user
    },
    async getUserInfo(id: string) {
      this.error = false
      this.loading = true
      try {
        const user = await UserService.getUserInfo(id)
        this.setUser(user)
      } catch (e) {
        console.error(e)
        this.setError(true)
      } finally {
        this.setLoading(false)
      }
    }
  }
})