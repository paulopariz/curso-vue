import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Paulo',
      last_name: 'Pariz',
      email: 'paulo@.com'
    },
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100
      },
      {
        id: 2,
        name: 'chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'meiao',
        price: 50
      },
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data){
      state.user = data
    },


    addProduct(state, data){
      state.cart.push(data)
    },

    removeProduct(state, id){
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx,  1);
    }
  },
  actions: {
  },
  modules: {
  }
})
