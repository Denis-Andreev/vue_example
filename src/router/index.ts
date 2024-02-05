import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage/RegisterPage.vue'
import ListPage from '@/views/ListPage/ListPage.vue'
import ProfilePage from '@/views/ProfilePage/ProfilePage.vue'
import NoAccessPage from '@/views/NoAccessPage/NoAccessPage.vue'
import { checkToken } from '@/api/helpers/token'
import MainPage from '@/views/MainPage/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/403',
      name: '403',
      component: NoAccessPage
    },
    {
      path: '/',
      name: 'Главная',
      component: MainPage
    },
    {
      path: '/login',
      name: 'Логин',
      component: LoginPage
    },
    {
      path: '/list',
      name: 'Список чего-то',
      component: ListPage
    },
    {
      path: '/profile',
      name: 'Профиль',
      component: ProfilePage
    },
    {
      path: '/register',
      name: 'Регистрация',
      component: RegisterPage
    }
  ]
})

const protectedPages = ['Профиль', 'Список чего-то']
router.beforeEach(async (to) => {
  const toName = to.name
  if (
    !checkToken() && toName &&
    protectedPages.includes(toName as string) && toName != '403'
  ) {
    return '/403'
  }
})

export default router
