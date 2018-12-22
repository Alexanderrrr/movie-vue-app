<template>
  <div :class="{ 'bg-dark': selected }">
    <router-link :to="{ name: 'single-movie', params: {id: movie.id} }">
      <li class="list-group-item list-group-item-success">{{movie.title}}</li>
    </router-link>
    <li class="list-group-item"><strong>director:</strong> {{movie.director}}</li>
    <li class="list-group-item"><img :src='movie.imageUrl'/></li>
    <li class="list-group-item">{{movie.releaseDate}}</li>
    <li class="list-group-item">{{movie.genre}}</li>
    <li class="list-group-item"><strong>duration:</strong> {{movie.duration}}</li>
    <button @click="select(movie)" class="list-group-item btn btn-outline-success">Select</button>
  </div>
</template>

<script>

export default {

  props: ['movie'],
  methods: {
    select(movie){
        this.$emit('callParentFunction', movie)
    }
  },
  computed: {
    selected(){
      return false
    }
  }
}
</script>

<style lang="css">

</style>
