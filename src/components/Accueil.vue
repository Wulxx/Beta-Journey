<template>
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Unlimited music now</div>
              Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            :color="'#385F73'"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                ></v-list-item-title>

                <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'premier', flex: 12, row: 1, src: 'https://cdn.pixabay.com/photo/2019/09/26/11/59/sarajevo-4505752__340.jpg' },
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
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' },
      { title: 'second', flex: 12, row: 2, src: 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg' },
      { title: 'troisèem', flex: 12, row: 3, src: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg' },
      { title: 'quatre', flex: 12, row: 4, src: 'https://cdn.pixabay.com/photo/2019/04/07/13/58/pond-4109750__340.jpg' },
      { title: 'cinq', flex: 12, row: 5, src: 'https://cdn.pixabay.com/photo/2019/03/19/15/03/fantasy-4065924__340.jpg' }
    ]
  })
}
</script>
