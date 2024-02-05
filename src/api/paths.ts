export default {
  login: '/auth/login',
  register: '/auth/register',
  refresh: '/auth/refresh',
  user: (id: string) => `/users/${id}`
}