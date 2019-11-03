<template>
  <v-container>
      <v-img height="50%"
      width="100%"
      :src='imageSource'></v-img>
      <div>
          <v-btn text icon color="pink">
              <v-icon>mdi-heart</v-icon>
          </v-btn>
      </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imageSource: '',
    title: '',
    text: '',
    author: '',
    date: '',
    likes: 0,
    liked: false,
    comments: [],
    postId: 0
  }),
  methods: {
    like: function (postId) {
      this.liked = !this.liked
    }
  }
}
</script>
