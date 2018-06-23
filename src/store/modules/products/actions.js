
import { http } from '@p/http'

export default {
  fetchList ({ commit }) {
    http.get('/produto').then(res => {
      commit('SET_LIST', res.data.products.reverse())
    })
  }
}
