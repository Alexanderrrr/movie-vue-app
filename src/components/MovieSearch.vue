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

export default {
  data(){
    return {
      searchTermUpdated: "",
    }
  },

  methods: {
    filterMovies() {
      EventBus.$emit('sentFilter', this.searchTermUpdated)
    }
  }
}
</script>

<style lang="css">
</style>
<!-- v-if="product.name.toLowerCase().includes(searchTerm.toLowerCase())" -->
