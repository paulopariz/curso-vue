import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Paulo',
      last_name: 'Pariz',
      email: 'paulo@.com'
    },
    products: [],
    cart: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
