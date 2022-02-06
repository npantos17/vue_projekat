import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    token: '',
    // user: {}
  },
  mutations: {
    setCars(state, cars){
      this.cars = cars
    },
    addCar(state, car){
      state.cars.push(car)
    },
    setToken: (state, token) => {
      state.token = token;
      localStorage.token = token;
    },
    // set_user: (state, user) => {
    //   state.user = user;
    //   console.log(state.user);
    // },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }
  },

  actions: {
    fetchCars({commit, state}){
      fetch('http://127.0.0.1:8000/admin/cars/', { method: 'get', headers: { 'Authorization': state.token } })
        .then( obj => obj.json() )
        .then( res => commit('setCars', res.cars));

    },
    register({ commit }, obj) {
      fetch('/http://127.0.0.1:9000/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
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
