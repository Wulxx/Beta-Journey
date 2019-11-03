<template>
        <v-carousel
        hide-delimiters="true"
        cycle="true">
          <v-carousel-item :key="i" v-for="i in 5">
            <v-layout row>
              <v-flex xs4 :key="j" v-for="j in 3">
                <v-parallax src="https://cdn.pixabay.com/photo/2019/09/30/18/41/taxi-4516525_1280.jpg">
                </v-parallax>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
</template>

<script>
export default {
  data: () => ({
    Slider: [
      { title: 'Bienvenue sur Voyage Voyage', color: 'primary', src: 'https://cdn.pixabay.com/photo/2019/09/30/18/41/taxi-4516525_1280.jpg' },
      { title: 'Ici tu peux partager ', color: 'secondary', src: 'https://cdn.pixabay.com/photo/2019/09/25/20/52/sun-4504661__340.jpg' },
      { title: 'tes plus beaux voyage', color: 'primary', src: 'https://cdn.pixabay.com/photo/2019/06/02/17/27/summer-4246927__340.jpg' },
      { title: 'Avec le monde entier', color: 'yellow darken-2', src: 'https://cdn.pixabay.com/photo/2019/09/29/08/57/sea-4512642__340.jpg' }
    ]
  })
}
</script>
