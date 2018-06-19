
import Vue from 'vue'
import App from './App'
import router from './router'
import http from '@p/http'
import eventBus from '@p/event-bus'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(eventBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
