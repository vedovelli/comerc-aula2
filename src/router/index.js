import Vue from 'vue'
import Router from 'vue-router'
import { bus as eventBus } from '@p/event-bus'
import { getToken } from '@s/local'

import AuthenticationRoutes from '@f/authentication/routes'
import DashboardRoutes from '@f/dashboard/routes'
import ProductsRoutes from '@f/products/routes'
import CategoriesRoutes from '@f/categories/routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active', // https://router.vuejs.org/api/#active-class
  mode: 'history', // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  routes: [
    ...AuthenticationRoutes,
    ...DashboardRoutes,
    ...ProductsRoutes,
    ...CategoriesRoutes
  ]
})

router.beforeEach(async (to, from, next) => {
  eventBus.$emit('reset-errors')
  const { requiresAuth: auth } = to.meta
  const token = await getToken()
  if (auth != null && auth && token == null) {
    next({ name: 'login.index' })
    return
  }
  next()
})

export default router
