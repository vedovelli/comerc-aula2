
// https://router.vuejs.org/guide/advanced/lazy-loading.html
const Main = () => import('./Main')
const Form = () => import('./Form')

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
