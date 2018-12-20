<template>
    <form @submit.prevent="submitForm">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
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
  },

  computed: {
    ...mapGetters({
      errors: 'getErrors'
    })
  }
}
</script>
<style lang="css">
  .form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  }
  .form-signin .checkbox {
  font-weight: 400;
  }
  .form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  }
  .form-signin .form-control:focus {
  z-index: 2;
  }
  .form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  }
</style>
