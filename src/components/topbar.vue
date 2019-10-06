  <template>
  <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <v-toolbar-side-icon @click="drawer = !drawer"  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" to="/home">
        <v-btn text color="white" to="/home">
      Stourney
      </v-btn>
      </v-toolbar-title>
    <img class="mr-3" :src="require('../assets/logo.png')" height="40"/>
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
          @click="dialog = !dialog"
        >
          <v-icon>mdi-plus-circle</v-icon>   Ajouter une image
        </v-btn>
      </template>
    </v-menu>
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
          <v-list-item-title>
            {{ item.title }}
            </v-list-item-title>
            <v-list-item-avatar>
            <v-img :src="'https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'" aspect-ratio="4/4" max-height="40px" max-width="40px"></v-img>
            </v-list-item-avatar>
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
          @click="menuActions(item,index)"
          to:item.route
        >
          <v-list-item-title>{{ item.title + value}}</v-list-item-title>
            <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
          <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-card-title>
                Ajouter une image
              </v-card-title>
              <v-text-field label="File name"></v-text-field>
              <v-text-field label="Lieu"></v-text-field>
              <v-text-field label="Stourney"></v-text-field>
               <v-file-input
                  label="File input"
                  filled
                  counter
                  multiple
                  accept="image/*"
                  prepend-icon="mdi-camera"
                ></v-file-input>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          <settingsForm v-model="showSettingsModel"></settingsForm>
  </v-toolbar>
  </template>
<script>

import settingsForm from './settingsForm'

export default {
  name: 'App',
  components: {
    settingsForm
  },
  data: () => ({
    profilOptions: [
      { title: 'Mon Profile', icon: 'mdi-account-box', action: 'profil' },
      { title: 'Paramètres', icon: 'mdi-settings', action: 'showsettings' },
      { title: 'Déconnexion', icon: 'mdi-cellphone-link-off', action: 'deco' }
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
    ],
    dialog: false,
    showSettingsModel: false,
    value: 0
  }),
  methods: {
    menuActions: function (el, i) {
      if (i === 0) {
        this.profil()
      }
      if (i === 1) {
        this.showSettings()
      }
      if (i === 2) {
        this.deco()
      }
    },
    profil: function () {
      this.value = this.value + 1
      alert('profil')
    },
    showSettings: function () {
      this.showSettingsModel = !this.showSettingsModel
    },
    deco: function () {
      alert('deconnecté')
    }
  }
}
</script>
