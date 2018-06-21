
import Main from './Main'
import Form from './Form'

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
