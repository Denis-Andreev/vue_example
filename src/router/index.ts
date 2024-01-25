import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import LoginPage from '@/views/LoginPage/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
