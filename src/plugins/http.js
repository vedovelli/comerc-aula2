
import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.API_URL
})

export function setToken (token) {
  http.defaults.headers.common['x-access-token'] = token
}
