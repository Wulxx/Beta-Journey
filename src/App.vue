<template>
  <v-app>
<v-app-bar>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Header/>
      <Accueil/>
      <v-divider></v-divider>
    </v-content>
  </v-app>
</template>

<script>
import Accueil from './components/Accueil'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Accueil, Header
  },
  data: () => ({
    //
  })
}
</script>
<style>

</style>
