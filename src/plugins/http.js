
import axios from 'axios'
import { getToken } from '@s/local'

export const http = axios.create({
  baseURL: process.env.API_URL
})

http.interceptors.request.use(async config => {
  const token = await getToken()
  config.headers.common['x-access-token'] = token
  return config
}, error => Promise.reject(error))

export function setToken (token) {
  http.defaults.headers.common['x-access-token'] = token
}
