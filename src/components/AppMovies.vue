<template>
  <div>
    <h5>Movies Selected: {{counter}}</h5>
    <button class="btn btn-outline-success">Select All</button><br><br>
    <button class="btn btn-outline-default">Deselect All</button>

    <div class="container jumbotron">
        <template v-if="errors.length">
          <ul>
            <li v-for="error in errors" class="p-3 mb-2 bg-danger text-white rounded">{{ error }}</li>
          </ul>
        </template>
        <template v-else="movie.title.toLowerCase().includes(searchTerm.toLowerCase())">
          <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <movie-row :movie="movie" @callParentFunction="selected()" /><hr>
          </ul>
        </template>
    </div>
  </div>
</template>

<script>
import movieService from '../services/MovieService'
import MovieRow from './MovieRow.vue'
import { EventBus } from '../services/EventBus'

export default {
  beforeRouteEnter(to, from, next){
    movieService.getAll()
    .then(res => {
      next(vm => {
        vm.movies = res.data
      })
    })
  },

  created() {
    EventBus.$on('sentFilter', searchTermUpdated => {
      this.searchTerm = searchTermUpdated
    })
  }
,

  components: {
    MovieRow
  },

  data(){
    return {
      movies: [],
      searchTerm: '',
      errors: [],
      counter: 0,
    }
  },

  methods: {
    selected(){
      this.counter++
    }
  }

}
</script>

<style lang="css">
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    height: 100%
  }


</style>
