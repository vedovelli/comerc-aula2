import Vue from 'vue'
import Router from 'vue-router'

import AuthenticationRoutes from '@f/authentication/routes'
import DashboardRoutes from '@f/dashboard/routes'
import ProductsRoutes from '@f/products/routes'
import CategoriesRoutes from '@f/categories/routes'

Vue.use(Router)

export default new Router({
  routes: [
    ...AuthenticationRoutes,
    ...DashboardRoutes,
    ...ProductsRoutes,
    ...CategoriesRoutes
  ]
})
