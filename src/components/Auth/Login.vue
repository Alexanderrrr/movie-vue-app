<template lang="html">
  <div>
    <h3>Add Costumer</h3>
    <form @submit.prevent="submitForm">
      <label>Email</label>
      <input v-model="email" placeholder="email"><br>

      <label>Password</label>
      <input type="password" v-model="password" placeholder="password"><hr>

      <button type="submit">Add Costumer</button>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    ...mapActions(['login']),

    submitForm() {
      this.login({
        email:this.email,
        password: this.password,
        nextRouteName: 'movies'})

    }
  }
}
</script>

<style lang="css">
</style>
