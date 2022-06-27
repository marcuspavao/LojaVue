import { createStore } from 'vuex'

export default createStore({
  state: {
    roupas: []
  },
  mutations: {
    saveRoupa(state, payload) {
      state.roupas.push(payload)
    }
  },
  actions: {
    saveRoupa(context, payload) {
      context.commit('saveRoupa', payload)
    }
  },
  modules: {
  }
})