<template>
<v-app light>
  <topbar id="topBar"/>
       <v-row id="content" justify="center" align="center">
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-row>
    <v-row v-scroll:#scroll-target="onScroll">
        <router-view></router-view>
    </v-row>
  <v-footer app>
      <footerView/>
  </v-footer>
  </v-app>
</template>

<script>
import topbar from './components/reusedComponents/topbar'
import footerView from './components/reusedComponents/Footer'

export default {
  name: 'App',
  components: {
    topbar, footerView
  },
  data: () => ({
    offsetTop: 0
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
  }
}
</script>
<style>
#topBar{
position: fixed;
z-index: 1;
width: 100%;
}
#content {
  padding: 16px;
  margin-top: 100%;
}
</style>
