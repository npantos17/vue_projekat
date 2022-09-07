import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import SingleCarView from '@/views/SingleCarView';
import SingleSellerView from '@/views/SingleSellerView';
import SingleUserView from '@/views/SingleUserView';
import AddCar from '@/views/AddCar';
import AddSeller from '@/views/AddSeller';
import UpdateCar from '@/views/UpdateCar';
import Users from '@/views/Users';
import Sellers from '@/views/Sellers';


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
    path: '/sellers/:id',
    name: 'SingleSellerView',
    component: SingleSellerView
  },
  {
    path: '/users/:id',
    name: 'SingleUserView',
    component: SingleUserView
  },
  {
    path: '/addCar/:id', //ovo je id biblioteke, jer mi treba kako bi filtrirao
    name: 'AddCar',
    component: AddCar
  },
  {
    path: '/addSeller/', 
    name: 'AddSeller',
    component: AddSeller
  },
  {
    path: '/updateCar',
    name: 'UpdateCar',
    component: UpdateCar
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/sellers',
    name: 'Sellers',
    component: Sellers
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
