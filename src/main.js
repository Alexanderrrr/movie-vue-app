import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppMovie from './components/AppMovies'
import {store} from './store/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path:'/', redirect:'/movies'},
  {path:'/movies', component: AppMovie, name:'movies'},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
