import Vue from 'vue'
import Vuex from 'vuex'
import movieService from '../services/MovieService'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
      searchTermTwo: "",
      movies: [],
    },

    actions: {
      changeSearchTerm({commit}){
        commit('CHANGE_SEARCH_TERM')
      },

      async setMovies({commit}, payload){
        try {
          let movies = await movieService.getAll(payload);
          commit('SET_MOVIES', movies)
        } catch (error) {
            console.log(error);
        }
      }
    },

    getters: {
      getSearchTerm(state){
        return state.searchTermTwo
      },
      getMovies(state){
        return state.movies;
      }
    },

    mutations: {
      CHANGE_SEARCH_TERM(state, payload){
        state.searchTermTwo = payload
      },
      SET_MOVIES(state, payload){
        state.movies = payload;
      }
    }



})
