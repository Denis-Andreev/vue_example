import { envList } from '@/core/env-list'
import { jwtDecode } from 'jwt-decode'
import type { TokenInfo } from '@/api/models'

export const setToken = (token: string) => {
  localStorage.setItem(envList.tokenKey, token);
}
export const checkToken = () => {
  // можно валидировать на беке, но я не буду
  try {
    const token = localStorage.getItem(envList.tokenKey)
    return !!token;
  } catch (e) {
    console.error(e)
    return false;
  }
}

export const decodeToken = () => {
  try {
    const token = localStorage.getItem(envList.tokenKey)
    if(!token) return undefined;
    return jwtDecode(token) as TokenInfo;
  } catch (e) {
    console.error(e)
    return undefined;
  }
}

export const deleteToken = () => {
  localStorage.removeItem(envList.tokenKey)
}