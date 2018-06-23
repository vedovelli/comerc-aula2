
const Main = () => import('./Main')
const Form = () => import('./Form')

export default [
  {
    path: '/produtos',
    name: 'products.index',
    component: Main,
    meta: { requiresAuth: true },
    children: [{
      path: 'form/:id?',
      name: 'products.form',
      component: Form,
      meta: { requiresAuth: true }
    }]
  }
]
