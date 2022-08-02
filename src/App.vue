<template>
  <div
  v-if="$store.state.isUserLoggedIn">
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">

          <toolbar @toggleNavigationBar="drawer = !drawer">
          
          </toolbar>
          <!-- <navigation :toggle="drawer"/> -->
          <v-content>
            <breadcrumbs />
            <router-view/>
          </v-content>
          
        </div>
        
      </v-app>
      
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
  <div v-else-if="!$store.state.isUserLoggedIn">
  <login></login>
  </div>
</template>

<script>
import Login from './components/core/Login.vue'
export default {
    name: "App",
    data() {
        return {
          drawer:false,
          group:null
        };
    },
    components: { Login }
}
</script>

<style>
  .v-btn:hover:before{
    color: transparent !important;
  }

  .footer{
    bottom:0;
    position:fixed;
    width:100%;
  }
</style>
