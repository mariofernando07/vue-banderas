import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
        const res = await fetch('paises.json')
        const data = await res.json()
        commit('setPaises', data)
      }
    },
    filtrarRegion({ commit, state }, region) {
      const paises = state.paises.filter(pais => pais.region.includes(region))
      commit('setPaisesFiltrados', paises)
    },
    filtrarNombre({ commit, state }, nombre) {
      const text = nombre.toLowerCase()
      const paises = state.paises.filter(pais => pais.name.toLowerCase().includes(text))
      commit('setPaisesFiltrados', paises)
    }


  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) => a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
