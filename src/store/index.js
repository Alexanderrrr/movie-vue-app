import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router.js'
import movieService from '../services/MovieService'


Vue.use(Vuex);
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}
export const store = new Vuex.Store({

    state: {
      user: getUserFromLocalStorage(),
      token: localStorage.getItem('token'),
      searchTermTwo: "",
      movies: null,
      newMovie: {},
      errors: null
    },

    actions: {
      changeSearchTerm({commit}){
        commit('CHANGE_SEARCH_TERM')
      },

      async setMovies({commit}){
        try {
          let movies = await movieService.getAll();
          commit('SET_MOVIES', movies)
        } catch (error) {
            commit('SET_ERRORS', error.response ? error.response.data.errors : error);
        }
      },

      async postNewMovie({commit} , payload){
        try {
          await movieService.add(payload);
          router.push({name: 'movies'})
        } catch (error)  {
            commit('SET_ERRORS', error.response ? error.response.data.errors : error);
        }

      },


        async login({ commit }, {email, password, nextRouteName}){
          try {
            const {user, token} = await  movieService.login(email, password);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            movieService.setAuthHeaders(token);
            commit('SET_DATA', { user, token });
            router.push({name: nextRouteName || 'movies'})

          } catch (error){
              commit('SET_ERRORS', error.response ? error.response.data : error);

          }
         },

         async registerUser({ commit }, { name, email, password, password_confirmation } ) {
           try {
             console.log(name, password_confirmation);
             await movieService.register(name, email, password, password_confirmation);
             router.push({name: 'login'});
           } catch (error){
               commit('SET_ERRORS', error.response ? error.response.data.errors : error);

           }
         },

          logout({ commit }) {
            movieService.setAuthHeaders();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            commit('SET_DATA', {user: null, token: null})
            router.push({name: 'login'})
          }
    },

    getters: {
      getSearchTerm(state){
        return state.searchTermTwo;
      },
      getMovies(state){
        return state.movies;
      },
      getErrors(state){
        return state.errors;
      },
      getUser(state){
        return state.user;
      }
    },

    mutations: {
      CHANGE_SEARCH_TERM(state, payload){
        state.searchTermTwo = payload
      },
      SET_MOVIES(state, payload){
        state.errors = null;
        state.movies = payload;
      },
      SET_NEW_MOVIE(state, payload){
        state.newMovie = payload;
      },
      SET_ERRORS(state, payload){
        state.errors = payload
      },
      SET_DATA (state, {user, token}) {
        state.user = user;
        state.token = token;
        state.errors = null;
      },
    }



})
