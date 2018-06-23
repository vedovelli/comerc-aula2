
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

import products from './modules/products'
import categories from '@f/categories/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  modules: {
    products,
    categories
  }
})
