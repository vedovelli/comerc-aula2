
const Login = () => import('./Login')
const Password = () => import('./Password')
const Register = () => import('./Register')

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
