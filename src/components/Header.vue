<template>
  <v-carousel>
    <v-carousel-item
      v-for="slide in Slider"
      :key="slide.color"
      :title="slide"
    >
      <v-sheet
        :color="slide.color"
        height="100%"
        :title="title"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{slide.title}}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    Slider: [
      { title: 'Bienvenu sur Voyage Voyage', color: 'primary' },
      { title: 'Ici tu peux partager ', color: 'secondary' },
      { title: 'tes plus beaux voyage', color: 'primary' },
      { title: 'Avec le monde entier', color: 'yellow darken-2' }
    ]
  })
}
</script>
