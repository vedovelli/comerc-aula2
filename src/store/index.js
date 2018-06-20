
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

import Products from './modules/products'
import Categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    Products,
    Categories
  }
})
