import movieService from '../services/MovieService'
import router from '../router/router.js'

export default {
  state: {
    movies: {},
    errors: null
  },

  mutations: {
    SET_MOVIES(state, payload){
      state.errors = null;
      state.movies = payload;
    },

    SET_ERRORS(state, payload){
      state.errors = payload
    },
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

    }
  },

  getters: {
    getMovies(state){
      return state.movies;
    },
    getMoviesErrors(state){
      return state.errors;
    },
  }
}
