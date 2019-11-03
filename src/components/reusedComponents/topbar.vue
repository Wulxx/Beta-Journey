  <template>
  <v-app-bar
      absolute
      color="#fcb69f"
      dark
      fixed
      src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-pastel-green-solid-color-background.jpg"
      height="64px">
      <v-app-bar-nav-icon @click="leftMenuApparition = !leftleftMenuApparitionMenu" v-if="isCollapsable"></v-app-bar-nav-icon>
    <v-app-bar-title class="white--text" to="/home">
        <v-btn text color="white" to="/home">
      {{ isCollapsable }}
      </v-btn>
      </v-app-bar-title>
           <v-spacer />
    <div class="flex-grow-1" v-if="!isCollapsable && isConnected"></div>
    <div id="barMenu" v-if="!isCollapsable">
      <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-magnify</v-icon>
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
          text
          v-on="on"
          @click="sendNewPicture"
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
          icon
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
          icon
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
          icon
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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
              <v-text-field label="File name" v-model="postName"></v-text-field>
              <v-text-field label="Lieu"></v-text-field>
              <v-text-field label="Stourney" v-model="caption"></v-text-field>
               <v-file-input
                  label="File input"
                  filled
                  counter
                  multiple
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  v-model="imageAdded"
                  @change="onFileChange"
                ></v-file-input>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          <settingsForm v-model="showSettingsModel"></settingsForm>
          </div>
  </v-app-bar>

  </template>
<script>

import settingsForm from './settingsForm'
import api from '../../Services/api.js'
import axios from 'axios'
import router from '../../router/index'

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
    value: 0,
    imageAdded: null,
    postName: '',
    name: '',
    caption: '',
    window: {
      width: 0,
      height: 0
    },
    isCollapsable: false,
    leftMenu: false,
    leftMenuApparition: false,
    formData: new FormData()
  }),
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      console.log(e)
      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          this.imageAdded = files
        }
      }
    },
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
    sendNewPicture () {
      this.dialog = !this.dialog
      axios.post('http://localhost:8082/newPost', {
        photo: this.imageAdded,
        name: this.postName,
        caption: this.caption,
        form: self.formData
      }).then(function (response) {
        console.log(response)
      })
        .catch(function (error) {
          console.log(error)
        })
      console.log({
        name: this.name
      })
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.isCollapsable = this.window.width < this.window.height
      this.leftMenu = this.window.width < this.window.height
    },
    profil: function () {
      this.value = this.value + 1
      this.$router.push('/profile')
      api.fetchProfileData()
        .then(response => {
          console.log(response)
          this.name = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    showSettings: function () {
      this.showSettingsModel = !this.showSettingsModel
    },
    deco: function () {
      axios.post('http://localhost:8082/deco', {
      }).then(function (response) {
        console.log(response)
        if (response.status === 200) {
          router.push('/')
          this.isConnected = false
        }
      })
        .catch(function (error) {
          console.log(error)
        })
      console.log({
        name: this.name
      })
    }
  },
  props: {
    isConnected: Boolean
  }
}
</script>
