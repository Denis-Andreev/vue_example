import { defineStore } from 'pinia'
import type { Post } from '@/api/models/posts'
import { PostsService } from '@/api/services/PostsService'

interface LoginStoreState {
  loading: boolean;
  error: boolean;
  filters: {
    search: string;
  }
  list: Post[]
}

const initialState: LoginStoreState = {
  loading: false,
  error: false,
  filters: {
    search: ''
  },
  list: []
}
export const useListStore
  = defineStore('listStore', {
  state: () => initialState,
  getters: {
    listFiltered(state) {
      return state.list.filter(item => [item.body, item.title].some((v => v.includes(state.filters.search))))
    }
  },
  actions: {
    setError(error: boolean) {
      this.error = error
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setPosts(posts: Post[]) {
      this.list = posts
    },
    async getPosts() {
      this.error = false
      this.loading = true
      try {
        const res = await PostsService.getPosts()
        this.setPosts(res.data)
      } catch (e) {
        console.error(e)
        this.setError(true)
      } finally {
        this.setLoading(false)
      }
    }
  }
})