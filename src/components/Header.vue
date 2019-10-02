<template>
  <v-carousel>
    <v-carousel-item
      v-for="slide in Slider"
      :key="slide.color"
      :title="slide"
      interval=6000
    >
      <v-sheet
        :color="slide.color"
        height="100%"
        :title="'title'"
        :src="slide.src"
      >
        <v-img class="fill-height"
          align="center"
          justify="center"
          :src="slide.src">
          <div class="display-3"
          align="center"
          justify="center">{{slide.title}}</div>
          </v-img>

      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    Slider: [
      { title: 'Bienvenu sur Voyage Voyage', color: 'primary', src: 'https://i2.wp.com/ravefeed.com/wp-content/uploads/2019/08/IMG_3961.jpg?w=1920&ssl=1' },
      { title: 'Ici tu peux partager ', color: 'secondary', src: 'https://cdn.pixabay.com/photo/2019/09/25/20/52/sun-4504661__340.jpg' },
      { title: 'tes plus beaux voyage', color: 'primary', src: 'https://cdn.pixabay.com/photo/2019/06/02/17/27/summer-4246927__340.jpg' },
      { title: 'Avec le monde entier', color: 'yellow darken-2', src: 'https://cdn.pixabay.com/photo/2019/09/29/08/57/sea-4512642__340.jpg' }
    ]
  })
}
</script>
