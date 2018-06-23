
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import plugins from '@p'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
