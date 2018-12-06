<template>
  <div>
    <li class="list-group-item list-group-item-primary">{{movie.title}}</li>
    <li class="list-group-item">{{movie.director}}</li>
    <li class="list-group-item"><img :src='movie.imageUrl'/></li>
    <li class="list-group-item">{{movie.releaseDate}}</li>
    <li class="list-group-item">{{movie.genre}}</li>
    <li class="list-group-item">{{movie.duration}}</li>
    <button @click="select(movie)" class="list-group-item btn btn-outline-success">Select</button>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  data(){
    return {
      movies: []
    }
  },

  methods: {
    select(movie){
      if (!this.movies.includes(movie)) {
        this.movies = []
        this.movies.push(movie)
        this.$emit('callParentFunction')
      } else {
        alert("Allready selected!")
      }

    }
  }
}
</script>

<style lang="css">

</style>
