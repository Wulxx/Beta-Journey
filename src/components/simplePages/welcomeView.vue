<template>
      <v-parallax id="welcomeView" :height="window.height" dark src="https://lemag.nikonclub.fr/wp-content/uploads/2017/07/08.jpg">

      <div id="WelcomeDiv">
      <div class="flex-grow-1" ></div>
  <v-card
    class="mx-auto"
    min-height="600"
    max-width="600"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-title>
      Découvrez les souvenirs du monde entier
    </v-card-title>
    <v-card-actions>
      <v-btn text
      @click="creatButtonClicked"
      >créer un compte</v-btn>
      <v-btn
        color="purple"
        text
        @click="conButtonClicked"
      >
        Connexion
      </v-btn>
    </v-card-actions>
              <v-expand-transition>
      <div v-show="showCreat">
        <v-divider></v-divider>
        <creationForm/>
      </div>
      </v-expand-transition>
      <v-expand-transition>
      <div v-show="showCon">
        <v-divider></v-divider>
        <connexionForm/>
      </div>
    </v-expand-transition>
  </v-card>
      </div>
      </v-parallax>
</template>

<script>
import connexionForm from './Connexion'
import creationForm from './CreationCard'

export default {

  components: {
    connexionForm, creationForm
  },
  data: () => ({
    window: {
      width: 0,
      height: 0
    },
    showCreat: false,
    showCon: false
  }),
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < this.window.height) {
        this.colls = 1
      } else {
        this.colls = 3
      }
    },
    creatButtonClicked () {
      this.showCon = false
      this.showCreat = !this.showCreat
    },
    conButtonClicked () {
      this.showCreat = false
      this.showCon = !this.showCon
    }
  }
}
</script>

<style scoped>
#welcomeView {
  width: 100%;
}
#WelcomeDiv {
  z-index: 1;
display: inline-block;
}
</style>
