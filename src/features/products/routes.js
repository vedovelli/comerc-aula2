
import Main from './Main'
import Form from './Form'

export default [
  {
    path: '/produtos',
    name: 'products.index',
    component: Main,
    children: [{
      path: 'criar',
      name: 'products.new',
      component: Form
    }]
  }
]
