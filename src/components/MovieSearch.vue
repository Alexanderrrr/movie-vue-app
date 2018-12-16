<template>
  <div>
    <form @submit.prevent="filterMovies" class="form-inline my-2 my-lg-0">
      <input v-model="searchTermUpdated" class="form-control mr-sm-2" type="search" placeholder="Search Movie by Name" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import {EventBus} from '../services/EventBus'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {

  data(){
    return {
      searchTermUpdated: "",
    }
  },

  methods: {
    ...mapMutations({search: 'CHANGE_SEARCH_TERM'}),

    filterMovies() {
      this.search(this.searchTermUpdated)
    }

  }
}
</script>

<style lang="css">
</style>
