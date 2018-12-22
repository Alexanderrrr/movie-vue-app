import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovie from '../components/AppMovies'
import AddMovie from '../components/AddMovie'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import SingleMovie from '../components/SingleMovie'

Vue.use(VueRouter)

const routes = [
  {path:'/', redirect:'/movies'},
  {path:'/movies', component: AppMovie, meta: {guest: false},name:'movies'},
  {path:'/add', component: AddMovie,meta: {guest: false}, name: 'add-movie'},
  {path:'/login', component: Login,meta: {guest: true}, name: 'login'},
  {path:'/register', component: Register,meta: {guest: true}, name: 'register'},
  {path:'/movies/:id', component: SingleMovie,meta: {guest: false}, name: 'single-movie'}
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
