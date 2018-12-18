<template>
  <div>
    <form @submit.prevent="postNewMovie(newMovie)">
      <label>Title</label>
      <input v-model="newMovie.title" placeholder="title"><br>

      <label>Director</label>
      <input v-model="newMovie.director" placeholder="director"><br>

      <label>Image</label>
      <input v-model="newMovie.imageUrl" placeholder="image url"><br>

      <label>Duration</label>
      <input v-model="newMovie.duration" placeholder="duration"><br>

      <label>Release Date</label>
      <input v-model="newMovie.releaseDate" placeholder="release date"><br>

      <label>Genre</label>
      <input v-model="newMovie.genre" placeholder="genre"><hr>

      <button type="submit">Add Costumer</button>
    </form>
    <template v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error.id" class="p-3 mb-2 bg-danger text-white rounded">{{ error[0] }}</li>
      </ul>
    </template>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import movieService from '../services/MovieService'
export default {
  data(){
    return {
      newMovie: {}
    }
  },
  methods: {
    ...mapActions(['postNewMovie']),
  },
  computed: {
    ...mapGetters({
      errors: 'getErrors'
    })
  }
}
</script>

<style lang="css">
</style>
