import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/Accueil.vue'
import profileView from '../components/reusedComponents/profilView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: App
    },
    {
      path: '*',
      redirect: {
        name: 'Accueil'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      props: true,
      component: profileView
    }
  ]
})
