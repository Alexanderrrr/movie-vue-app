<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto navbar-brand">Movies</h5>
        <movie-search />
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link class="p-2 text-dark" :to="{name:'movies'}">Posts</router-link>
        </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MovieSearch from './components/MovieSearch'


export default {


  name: 'app',
  components: {
    MovieSearch,
  },

  data(){
    return {
      movies: []
    }
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
