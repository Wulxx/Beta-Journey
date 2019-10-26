<template>
<v-container
class="overflow-y-auto"
      fluid
      fixed
      id="scroll-target"
    >
    <headCarousel/>
   <v-row class="mb-6">
      <v-col v-if="colls >= 2" :cols="3">
        <v-label> Les dernières citations : </v-label>
        <v-card
            color="#26c6da"
            dark
            width="95%"
          >
            <v-card-title>
              <v-icon
                large
                left
              >
                mdi-twitter
              </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
                </v-card>
      </v-col>
      <v-col>
          <v-container
            class="overflow-y-auto"
            fluid
            id="scroll-target"
            style="width:100%"
          >
            <v-row>
              <v-col
                v-for="(card, index) in items"
                :key="card.title"
                id='elements'
              >
              <v-hover v-slot:default="{ hover }">
                <v-card
                :flat="true"
                tile="true"
                >
                  <v-responsive :aspect-ratio="1/1">
                    <v-parallax
                      :src="card.src"
                      class="white--text"
                      :height="250"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      outlined=false
                    >
                      <v-card-title
                        class="fill-height align-end"
                        v-text="card.title"
                      ></v-card-title>

                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          {{card.title}}
                        </div>
                      </v-expand-transition>
                    </v-parallax>

                    <v-card-actions>
                      <div class="flex-grow-1">
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn
                        text
                        color="cyan"
                        :id=index
                        @click="expand(card,index)"
                      >
                      Explorer avec {{card.title}} ?
                      </v-btn>
                      </div>
                    </v-card-actions>
                        <v-card-text>
                          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <div class="text-center">
                        <v-btn rounded color="cyan" dark
                        >La suite du Strouney</v-btn>
                        </div>
                  </v-responsive>
                </v-card>
                </v-hover>
        </v-col>
      </v-row>
      </v-container>
      </v-col>
      <v-col v-if="colls >= 3" :cols="3">
        <v-divider
        dark="true">
        </v-divider>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import headCarousel from './reusedComponents/Header'

export default {
  name: 'App',
  el: '#elements',
  components: {
    headCarousel
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
    ],
    window: {
      width: 0,
      height: 0
    },
    colls: 3
  }),
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    expand: function (el, i) {
      el.show = true
      this.$set(this.items, i, el)
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < this.window.height) {
        this.colls = 1
      } else {
        this.colls = 3
      }
    }
  },
  props: {

  }
}
</script>
<style scoped>
#collectionContainer {
  margin-left: 50px;
}
#accueilContainer {
  width: 50%
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>
