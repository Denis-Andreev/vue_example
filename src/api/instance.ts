import axios from "axios";
import { envList } from '@/core/env-list'

export const instanceAxiosOpen = () =>
  axios.create({
    baseURL: envList.apiUrl,
    headers: {
      ContentType: 'application/json'
    }
  })

export const instanceAxiosClose = (token: string | null) =>
  axios.create({
    baseURL: envList.apiUrl,
    headers: {
      //mode: 'no-cors',
      Authorization: `Bearer ${token}`,
      ContentType: 'application/json'
    }
  })
