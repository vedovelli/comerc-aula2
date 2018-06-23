
const Main = () => import('./Main')
const Form = () => import('./Form')

export default [
  {
    path: '/produtos',
    name: 'products.index',
    component: Main,
    children: [{
      path: 'form/:id?',
      name: 'products.form',
      component: Form
    }]
  }
]
