<template>
  <v-footer class="d-flex p-2" height="auto" dark>
    <v-card
      flat
      tile
      :color="$root.themeColor"
      class="text-xs-center">


      <v-card-text class="white--text">
        &copy;2022 — <strong>The Loadstar</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style>

</style>
