<template>
<v-app light>
  <topbar/>
  <v-content>
    <v-container fluid>
        <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>
      <footerView/>
  </v-footer>
  </v-app>
</template>

<script>
import topbar from './components/topbar'
import footerView from './components/Footer'

export default {
  name: 'App',
  components: {
    topbar, footerView
  },
  data: () => ({
  }),
  methods: {
    profil: () => {
      alert('Hello')
    },
    showSettings: () => {
      alert('this.showSettingsModel')
      this.showSettingsModel = true
    }
  }
}
</script>
<style>
</style>
