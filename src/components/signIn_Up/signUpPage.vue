<template>
    <v-card>
        <v-card-title>
            <h2> Sign up to discover a new world </h2>
            <v-form class="px-3">

                <v-text-field label="First Name" v-model="firstName"></v-text-field>
                <v-text-field label="Last Name" v-model="lastName"></v-text-field>                    <v-text-field label="First Name" v-model="firstName"></v-text-field>
                <v-text-field label="Pseudo" v-model="pseudo"></v-text-field>
                <v-text-field label="Password" v-model="password"></v-text-field>
                <v-btn flat class="success mx-0 mt-3" @click="submit"> Sign Up </v-btn>

            </v-form>

        </v-card-title>

    </v-card>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      pseudo: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log(this.firstName, this.lastName, this.pseudo, this.password)
    }
  }
}
</script>
