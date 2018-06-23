
export default {
  setToken ({ commit }, token) {
    // aqui por exemplo se poderia fazer comunicacao async com servico externo
    commit('SET_TOKEN', token)
  }
}
