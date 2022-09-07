import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import SingleCarView from '@/views/SingleCarView';
import AddCar from '@/views/AddCar';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cars/:id',
    name: 'SingleCarView',
    component: SingleCarView
  },
  {
    path: '/addCar/:id', //ovo je id biblioteke, jer mi treba kako bi filtrirao
    name: 'AddCar',
    component: AddCar
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
