<template>
    <v-card class="pa-2"
      fluid>
        <v-img id="pc" class="superpose" :src="'https://cdn.pixabay.com/photo/2019/09/27/20/40/houses-4509404_960_720.jpg'" max-height="400px" gradient="rgba(0,0,0,.0),rgba(0,0,0,.0), rgba(0,0,0,.7)">
        <v-img id="pp" class="superpose" :src="'https://cdn.pixabay.com/photo/2019/09/08/15/08/owl-4461236__340.jpg'" max-height="200px" max-width="200px" :aspect-ratio="4/4">
        </v-img>
        <v-spacer></v-spacer>
        <v-label class="superpose" :color="'white'" >Dernier Voyage : Hollande</v-label>
        </v-img>
        <v-card-title>
        <v-label class="superpose" >Nom d'utilisateur</v-label>
        <v-spacer></v-spacer>
        <v-btn class="superpose" >S'abonner</v-btn>
        </v-card-title>
        <v-card-text>
        <v-label class="superpose" >Description</v-label>
        </v-card-text>
        <v-card-actions>
          <v-card>
            <v-card-title>
                      <v-label class="superpose" >Followers</v-label>
            </v-card-title>
            <v-card-actions>
              <v-btn>12M</v-btn>
            </v-card-actions>
          </v-card>
          <v-card>
            <v-card-title>
                      <v-label class="superpose" >Followings</v-label>
            </v-card-title>
            <v-card-actions>
              <v-btn>123</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-actions>
      <feed/>
    </v-card>
</template>

<script>

import feed from '../Accueil'

export default {
  name: 'App',
  el: '#elements',
  components: {
    feed
  },
  data: () => ({
    emptyIcon: 'mdi-heart-outline',
    show: false,
    rating: 2,
    lenght: 5,
    fullIcon: 'mdi-heart',
    halfIcon: 'mdi-heart-half-full',
    halfIncrements: false,
    hover: true,
    length: 5,
    readonly: false,
    size: 32,
    dense: false,
    color: 'red lighten-3',
    items: [
      { title: 'premier', flex: 4, row: 1, src: 'https://cdn.pixabay.com/photo/2019/09/26/11/59/sarajevo-4505752__340.jpg' },
      { title: 'second', flex: 4, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 4, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' }
    ]
  }),
  methods: {
    expand: function (el, i) {
      el.show = true
      this.$set(this.items, i, el)
    }
  },
  mounted () {
    this.items = this.items.map(e => {
      let t = e
      e.show = false
      return t
    })
  }
}
</script>
<style scoped>

#superpose {
color : white;
font-size: large;
}
#collectionContainer {
  margin-left: 50px;
}
#pp {
  border-radius: 50%;
  border-style: solid;
  border-width: 5;
  margin-left: 37.5%;
  margin-top: 20px;
  border-color: black;
  height: 50;
  width: 50;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

#headInfo {
   position: relative;
   background-size: cover;
  width: 100%;
  background-image:url();
}
</style>