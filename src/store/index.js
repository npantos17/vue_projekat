import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    car: null,
    sellers: [],
    seller: null,
    orders: [],
    orders: null,
    token: '',
    loggedUserId: ''
    // user: {}
  },
  mutations: {
    setCars(state, cars){
      state.cars = cars
    },
    addCar(state, car){
      state.cars.push(car)
    },
    setToken: (state, token) => {
      state.token = token;
      localStorage.token = token;
    },
    setLoggedUserId(state, userId){
      state.loggedUserId = userId;
    },
    // set_user: (state, user) => {
    //   state.user = user;
    //   console.log(state.user);
    // },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setSellers(state, sellers) {
      state.sellers = sellers;
    },

    setOrders(state, orders) {
      state.orders = orders;
    },
    setSelectedCar(state, car){
      state.car = car;
    },
    setSeller(state, seller){
      state.seller = seller
    }

  },

  actions: {
    fetchCars({commit, state}){
      fetch('http://127.0.0.1:8500/admin/cars/all', { method: 'get', headers: { 'Authorization': state.token } })
        .then( obj => obj.json() )
        .then( res => commit('setCars', res.cars));

    },
    register({ commit }, obj) {
      fetch('/http://127.0.0.1:9000/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => {
          // commit('setToken', tkn.token)
          if (tkn.msg) {
            alert(tkn.msg);
          } else {
            // console.log(tkn.token)
            commit('setToken', tkn.token)
          }
        });
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:9000/api_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
          commit('setLoggedUserId', tkn.userId)
        }
      });
    },

    socket_comment({ commit }, car) {
      //const comment = JSON.parse(msg);
      commit('addCar', car);
    }
  },
  modules: {
  }
})
