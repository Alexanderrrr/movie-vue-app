import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovie from '../components/AppMovies'
import AddMovie from '../components/AddMovie'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import {store} from '../store/index.js'


Vue.use(VueRouter)

const routes = [
  {path:'/', redirect:'/movies'},
  {path:'/movies', component: AppMovie, name:'movies'},
  {path:'/add', component: AddMovie, name: 'add-movie'},
  {path:'/login', component: Login,meta: {guest: true}, name: 'login'},
  {path:'/register', component: Register,meta: {guest: true}, name: 'register'}

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (isAuthenticated && to.meta.guest) {
    return next({ name: 'movies' })
  }
  if (!isAuthenticated && !to.meta.guest) {
    return next({ name: 'login' })
  }

  return next();
});

export default router
