<template>
<v-app light>
  <!--The SideMenu Component go here-->
  <Side/>
  <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <v-toolbar-side-icon @click="drawer = !drawer"  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Stourney</v-toolbar-title>
    <img class="mr-3" :src="require('./assets/logo.png')" height="40"/>
           <v-spacer />
        <v-text-field
            label="Recherche"
            solo
            class="searchbar"
            style="margin-top: 25px"
          ></v-text-field>

    <div class="flex-grow-1"></div>
        <div class="text-center">
              <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
        <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
          @click="profil"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
         <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in friends"
          :key="index"
          @click="profil"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in profilOptions"
          :key="index"
          @click="profil"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  </v-toolbar>

  <v-content>
    <v-container fluid>
        <router-view></router-view>
    </v-container>
   </v-content>
   <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made by Alexendre Yoann Emmanuella
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>

</template>

<script>
import Side from './components/SideMenu'

export default {
  name: 'App',
  components: {
    Side
  },
  data: () => ({
    profilOptions: [
      { title: 'Mon Profile' },
      { title: 'Paramètres' },
      { title: 'Déconnexion' }
    ],
    notifications: [
      { title: 'Laurent à aimé votre photo' },
      { title: 'Alain à ajouté 17 photos' },
      { title: 'Pauline à commenté votre album' }
    ],
    friends: [
      { title: 'Paul' },
      { title: 'Jean' },
      { title: 'Marie' }
    ]
  }),
  methods: {
    profil: () => {
      alert('Hello')
    }
  }
}
</script>
<style>
  #style-1::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }
  #style-1::-webkit-scrollbar-thumb {
    background-color: #F90;
    background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
  }
  #style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  .drawer-style {
    background-color: #2196F3 !important;
    border-color: #2196F3 !important;
  }
</style>
