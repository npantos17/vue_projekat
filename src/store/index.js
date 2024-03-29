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
    order: null,
    users:[],
    user: null,
    token: '',
    loggedUserId: '',
    carInfo: {
      id: '',
      SellerId: '',
      brand: '',
      model: '',
      year: '',
      price: '',
      OrderId: '',
      
    }
    // user: {}
  },
  mutations: {
    setCarInfo(state, car){
      state.carInfo.id= car.id,
      state.carInfo.SellerId= car.SellerId,
      state.carInfo.brand= car.brand,
      state.carInfo.model= car.model,
      state.carInfo.year= car.year,
      state.carInfo.price= car.price,
      state.carInfo.OrderId= car.OrderId
      

      console.log()
    },
    setCars(state, cars){
      state.cars = cars
    },
    setUsers(state, users){
      state.users = users
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
    setOrder(state, order){
      state.order = order
    },
    setSelectedCar(state, car){
      state.car = car;
    },
    setSeller(state, seller){
      state.seller = seller
    },
    setUser(state, user){
      state.user = user
    }

  },

  actions: {
    fetchCars({commit, state}){
      fetch('http://127.0.0.1:8500/admin/cars/all', { method: 'GET', headers: {'Content-Type': 'application/json',
      //  'Authorization': state.token 
      }})
        .then( obj => obj.json() )
        .then( res => commit('setCars', res));

    },
    fetchCarByID({ commit }, id){
      fetch(`http://127.0.0.1:8500/admin/cars/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setSelectedCar', res) );
    },
    fetchSellerByID({ commit }, id){
      fetch(`http://127.0.0.1:8500/admin/sellers/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setSeller', res) );
    },
    fetchUserByID({ commit }, id){
      fetch(`http://127.0.0.1:8500/admin/users/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setUser', res) );
    },
    addCar({ commit }, obj){
      fetch('http://127.0.0.1:8500/admin/cars/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' ,
          'authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( el => {
            if (el.msg) {
              alert(el.msg, 'oerr');
            }
          });
  },
  addSeller({ commit }, obj){
    fetch('http://127.0.0.1:8500/admin/sellers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'oerr');
          }
        });
},
addUser({ commit }, obj){
  fetch('http://127.0.0.1:8500/admin/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' ,
      'authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(obj)
  }).then( res => res.json() )
      .then( el => {
        if (el.msg) {
          alert(el.msg, 'oerr');
        }
      });
},
  updateCar({ commit }, obj){
    fetch(`http://127.0.0.1:8500/admin/cars/${obj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
  },
  updateSeller({ commit }, obj, id){
    fetch(`http://127.0.0.1:8500/admin/sellers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
  },
  updateOrder({ commit }, obj){
    fetch(`http://127.0.0.1:8500/admin/orders/${obj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
  },
  deleteCar({ commit }, id){
    fetch(`http://127.0.0.1:8500/admin/cars/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
        this.$router.push({ name: 'Cars', params: { id: this.$route.params.id} });
  },
  deleteSeller({ commit }, id){
    fetch(`http://127.0.0.1:8500/admin/sellers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      }
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
        window.location.reload
  },
  deleteUser({ commit }, id){
    fetch(`http://127.0.0.1:8500/admin/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      }
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
        this.$router.push({ name: 'Users'});
  },
  deleteOrder({ commit }, id){
    fetch(`http://127.0.0.1:8500/admin/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      }
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'ovo je error msg');
          }
        });
        // this.$router.push({ name: 'Users'});
  },
  fetchSellers({commit, state}){
    fetch('http://127.0.0.1:8500/admin/sellers/all', { method: 'GET', headers: {'Content-Type': 'application/json',
    //  'Authorization': state.token 
    }})
      .then( obj => obj.json() )
      .then( res => commit('setSellers', res));

  },
  fetchUsers({commit, state}){
    fetch('http://127.0.0.1:8500/admin/users/all', { method: 'GET', headers: {'Content-Type': 'application/json',
      'Authorization': state.token 
    }})
      .then( obj => obj.json() )
      .then( res => commit('setUsers', res));

  },
  fetchOrders({commit, state}){
    fetch('http://127.0.0.1:8500/admin/orders/all', { method: 'GET', headers: {'Content-Type': 'application/json',
      'Authorization': state.token 
    }})
      .then( obj => obj.json() )
      .then( res => commit('setOrders', res));

  },
    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/api_register', {
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
          commit('setLoggedUserId', tkn.id)
          
          // console.log(this.state.loggedUserId)
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
