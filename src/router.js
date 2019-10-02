import Router from 'vue-router'
import HomePage from './components/Accueil.vue'
import AboutPage from './components/Header.vue'
import ExamplePage from './components/ConnexionView.vue'
// import messagesRoutes from '@/modules/messages/router';
// import peopleRoutes from '@/modules/people/router';

const baseRoutes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/examples',
    name: 'examples',
    component: ExamplePage
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

// const routes = baseRoutes.concat(messagesRoutes, peopleRoutes);
const routes = baseRoutes
export default new Router({
  routes
})
