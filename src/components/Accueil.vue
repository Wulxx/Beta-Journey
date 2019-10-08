<template>
    <v-container class="pa-2"
      fluid>
      <v-row class="nb-6">
        <v-col
          v-for="(card, index) in items"
          :key="card.title"
          :cols="undefined"
          id='elements'
        >
        <v-hover v-slot:default="{ hover }">
          <v-card
          class="pa-2"
          >
            <v-img
              :src="card.src"
              class="white--text"
              height="400px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
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
            </v-img>

            <v-card-actions>
              <div class="flex-grow-1">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

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
          </v-card>

          </v-hover>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>

export default {
  name: 'App',
  el: '#elements',
  components: {
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
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
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
#collectionContainer {
  margin-left: 50px;
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
