<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto navbar-brand">Movies</h5>
        <template v-if="user">
          <movie-search />
        </template>
        <nav class="my-2 my-md-0 mr-md-3">
          <template v-if="user">
            <router-link class="p-2 text-dark" :to="{name:'movies'}">All Movies</router-link>
            <router-link class="p-2 text-dark" :to="{name:'add-movie'}">Add Movie</router-link>
            <a href="#"
              @click="logout"
              class="p-2 text-dark">
            Logout</a>
          </template>
          <router-link class="p-2 text-dark" :to="{name:'login'}" v-if="!user">Login</router-link>
          <router-link class="p-2 text-dark" :to="{name:'register'}" v-if="!user">Register</router-link>
        </nav>
    </div>
    <main role="main" class="container">
      <router-view :key="$route.fullPath"/>
    </main>
  </div>
</template>

<script>
import MovieSearch from './components/MovieSearch'
import {mapActions, mapGetters} from 'vuex'


export default {


  name: 'app',
  components: {
    MovieSearch,
  },

  data(){
    return {
      movies: []
    }
  },
  methods: {
    ...mapActions(['logout']),

    onClickLogout() {
      this.logout();
    }
  },

  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
