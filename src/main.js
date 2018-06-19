
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from '@p'

Vue.config.productionTip = false

Vue.use(plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
