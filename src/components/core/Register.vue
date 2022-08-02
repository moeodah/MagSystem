<template>
  <v-app id="register" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="static/logo.png" alt="Vue Material Admin" width="180" height="180">
                  <h1 class="flex my-4 primary--text">Register</h1>
                </div>
                <v-form
                  autocomplete = "off">
                  <v-text-field
                    append-icon="person"
                    name="register"
                    label="Email"
                    type="text"
                    v-model="email"
                    aria-autocomplete="off"
                    :rules="[rules.required]"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    autocomplete="new-password"
                    @click:append="hidePassword = !hidePassword"/>
                    
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <div class="error" v-html="error" />
                <br/>
                <v-spacer/>

                <v-btn block color="primary" @click="register" :loading="loading">register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="showResult"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      loading: false,
      email: '',
      password: '',
      hidePassword: true,
      hideCode: true,
      error: null,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
        email:this.email,
        password:this.password,
      })
      this.$store.dispatch('setToken',response.data.token)
      this.$store.dispatch('setUser',response.data.user)
      }catch (error) {
        //this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped lang="css">
  #register {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
 
</style>
