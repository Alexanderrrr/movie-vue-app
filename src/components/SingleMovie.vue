<template>
  <div>
<h1 v-if="movie">{{ movie }}</h1>
<h1 v-else>JBG</h1>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  // 
  // beforeRouteEnter(to, from, next){
  //   next(vm => {
  //     vm.getMovie()
  //
  //   })
  // },
  created(){
    this.getMovie()
  },

  data(){
    return {
      loading: false,
      ispis: ""
    }
  },

  methods: {
    ...mapActions(['singleMovie','setMovies']),

    getMovie(){
      this.singleMovie(this.$route.params.id)
    }
  },

  computed: {
    ...mapGetters({
      movie: 'getMovie'
    })
  }
}
</script>

<style lang="css">
</style>
