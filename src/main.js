import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VueRouter)
Vue.use(axios)

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
