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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    topbar, footerView
  },
  data: () => ({
    offsetTop: 0,
    wholeResponse: '',
    token: ''
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
    axios
      .get('http://localhost:8082/')
      .then(response => {
        this.wholeResponse = response.data.Search
        localStorage.token = response
        let d = new Date()
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
        let expires = 'expires=' + d.toUTCString()
        document.cookie = 'Token=' + response.data.Token + ';' + expires + ';path=/'
      })
      .catch(error => {
        console.log(error)
      })

    if (localStorage.name) {
      this.token = localStorage.token
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
