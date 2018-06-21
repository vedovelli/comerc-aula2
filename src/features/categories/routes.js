
import Main from './Main'
import Form from './Form'

export default [
  {
    path: '/categorias',
    name: 'categories.index',
    component: Main,
    children: [
      {
        path: 'form/:id?',
        name: 'categories.form',
        component: Form
      }
    ]
  }
]
