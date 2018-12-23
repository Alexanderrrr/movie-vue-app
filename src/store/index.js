import Vue from 'vue'
import Vuex from 'vuex'
import movies from './MovieStore'
import auth from './AuthStore'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movies,
    auth
  }
});

export default store;
