
import Login from './Login'
import Password from './Password'
import Register from './Register'

export default [
  {
    path: '/login',
    name: 'login.index',
    component: Login
  }, {
    path: '/reset-password',
    name: 'password.index',
    component: Password
  }, {
    path: '/registrar',
    name: 'register.index',
    component: Register
  }
]
