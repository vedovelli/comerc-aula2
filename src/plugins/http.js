
import axios from 'axios'
import { getToken } from '@s/local'
import { bus as eventBus } from '@p/event-bus'

export const http = axios.create({
  baseURL: process.env.API_URL
})

http.interceptors.request.use(async config => {
  const token = await getToken()
  config.headers.common['x-access-token'] = token
  return config
}, error => Promise.reject(error))

http.interceptors.response.use(
  config => config,
  error => {
    eventBus.$emit('error-captured', error)
    return Promise.reject(error)
  }
)

export function setToken (token) {
  http.defaults.headers.common['x-access-token'] = token
}
