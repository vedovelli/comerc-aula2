
import Main from './Main'
import Form from './Form'

export default [
  {
    path: '/categorias',
    name: 'categories.index',
    component: Main,
    children: [
      {
        path: 'criar',
        name: 'categories.new',
        component: Form
      }
    ]
  }
]
