<template>
  <form @submit.prevent="submitForm">
    <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
    <label for="inputUserName" class="sr-only">Username</label>
    <input v-model="name" type="text" id="inputUserName" class="form-control" placeholder="Username" required>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <label for="inputPassword" class="sr-only">Confirm Password</label>
    <input v-model="password_confirmation" type="password" class="form-control" placeholder="Enter Password Again" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    <template v-if="errors">
      <ul>
        <li v-for="err in errors" class="p-3 mb-2 bg-danger text-white rounded">{{ err }}</li>
      </ul>
    </template>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },

  methods: {
    ...mapActions(['registerUser']),
    submitForm() {
      this.registerUser ({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation })

    }
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
