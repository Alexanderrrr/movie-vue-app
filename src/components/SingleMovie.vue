<template>
  <div class="container">
    <h1 v-if="movie">{{ movie }}</h1>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import movieService from '../services/MovieService'

export default {

  beforeRouteEnter(to, from, next){
    next(vm => {
      movieService.getOne(Number(vm.$route.params.id))
      .then(data => vm.movie = data)
    })
  },
  // created(){
  //   this.getMovie()
  // },

  data(){
    return {
      movie: null,
    }
  },
  methods: {
    getMovies(movie){
      this.movie = movie
    }
  }
}
</script>

<style lang="css">
</style>
