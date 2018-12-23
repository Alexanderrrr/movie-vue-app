import movieService from '../services/MovieService'
import router from '../router/router.js'

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}

export default {
  state: {
    user: getUserFromLocalStorage(),
    token: localStorage.getItem('token'),
    searchTermTwo: "",
    errors: null
  },
  mutations: {
    SET_DATA (state, {user, token}) {
      state.user = user;
      state.token = token;
      state.errors = null;
    },
    CHANGE_SEARCH_TERM(state, payload){
      state.searchTermTwo = payload
    },
    SET_ERRORS(state, payload){
      state.errors = payload
    },
  },
  actions: {
    async registerUser({ commit }, { name, email, password, password_confirmation } ) {
      try {
        await movieService.register(name, email, password, password_confirmation);
        router.push({name: 'login'});
      } catch (error){
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
    getAuthErrors(state){
      return state.errors;
    },
    getUser(state){
      return state.user;
    },
  },

}
