<template>
    <v-card>
        <v-card-title>
            <h2> Sign in to travel with us </h2>
            <v-form class="px-3">
                <v-text-field label="Pseudo" v-model="pseudo"></v-text-field>
                <v-text-field label="Password" v-model="password"></v-text-field>
                 <v-btn flat class="success mx-0 mt-3"> Sign In </v-btn>

            </v-form>

        </v-card-title>

    </v-card>
</template>

<script>
export default {
  data () {
    return {
      pseudo: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log(this.pseudo, this.password)
    }
  }
}
</script>
