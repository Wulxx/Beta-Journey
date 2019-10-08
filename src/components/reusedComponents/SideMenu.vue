<template>
  <v-navigation-drawer fixed app clipped  class="drawer-style" id="style-1">
    <v-list dense class="pt-3 white--text" >
      <v-list-tile
        v-for="source in items"
        :key="source.title"
        @click="selectSource(source.title)"
      >
        <v-list-tile-action>
          <v-avatar size="32px">
                <img
                  class="img-circle elevation-7 mb-1"
                  :src="getImgUrl(source.title)" />
          </v-avatar>

        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ source.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
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
