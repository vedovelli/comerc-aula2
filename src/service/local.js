
import local from 'localforage'

export const setToken = token => {
  return local.setItem('token', token)
}

export const getToken = () => {
  return local.getItem('token')
}