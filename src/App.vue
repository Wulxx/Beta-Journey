<template>
<v-app light>
  <v-content>
      <v-app-bar>
  <topbar id="topBar" :isConnected="isCOnnected"/>>
  </v-app-bar>
  <topBar></topBar>
        <router-view></router-view>
  </v-content>
  </v-app>
</template>

<script>
import topbar from './components/reusedComponents/topbar'

export default {
  name: 'App',
  components: {
    topbar
  },
  data: () => ({
    offsetTop: 0,
    wholeResponse: '',
    token: '',
    isCOnnected: false
  }),
  methods: {
    profil: () => {
      alert('Hello')
    },
    showSettings: () => {
      alert('this.showSettingsModel')
      this.showSettingsModel = true
    },
    onScroll (e) {
      alert('scroll')
      this.offsetTop = e.target.scrollTop
    }
  },
  mounted () {
    if (localStorage.token != null) {
      console.log('une session est déjà ouverte')
    }
  },
  watch: {
    name (newName) {
      localStorage.token = newName
    }
  }
}
</script>
<style>

#content {
}
</style>
