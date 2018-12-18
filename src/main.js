import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/router.js'
import AppMovie from './components/AppMovies'
import AddMovie from './components/AddMovie'
import {store} from './store/index.js'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
