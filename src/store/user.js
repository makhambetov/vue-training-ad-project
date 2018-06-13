import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      /*fb.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', new User(user.uid))
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error.message)
        })*/
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
