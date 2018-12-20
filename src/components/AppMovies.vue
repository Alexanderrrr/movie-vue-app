<template>
  <div>
    <h5>Movies Selected: {{selectedMovies.length}}</h5>
    <button @click="selectAll" class="btn btn-outline-success">Select All</button><br><br>
    <button @click="deselectAll" class="btn btn-outline-default">Deselect All</button>
    <div class="container jumbotron">
        <template v-if="errors">
          <ul>
            <li v-for="error in errors" :key="error.id" class="p-3 mb-2 bg-danger text-white rounded">{{ error }}</li>
          </ul>
        </template>
        <template>
          <div v-for="movie in movies" :key="movie.id">
            <ul v-if="movie.title.toLowerCase().includes(searchTermTwo.toLowerCase())" class="list-group">
              <movie-row :movie="movie" @callParentFunction="selected(movie)" /><hr>
            </ul>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import MovieRow from './MovieRow.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  beforeRouteEnter(to, from, next){
      next(vm => {
        vm.setMovies()
      })
  },
  // created(){
  //   this.setMovies()
  // },

  components: {
    MovieRow
  },
  data(){
    return {
      searchTerm: '',
      selectedMovies: []
    }
  },
  methods: {
    ...mapActions(['setMovies']),
    selected(movie){
      if (!this.selectedMovies.includes(movie)) {
        return this.selectedMovies.push(movie)

      } else {
        alert("Allready selected!")
      }
    },

    selectAll(){
      this.selectedMovies = this.movies
    },

    deselectAll(){
      return this.selectedMovies = []
    }
  },

  computed: {
    ...mapGetters({
      movies: 'getMovies',
      errors: 'getErrors'
    }),
    searchTermTwo(){
      return this.$store.getters.getSearchTerm
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
