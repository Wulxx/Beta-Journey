<template>
  <v-layout align-center justify-center>
        <v-row align="center" justify="center" >
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer> <v-spacer />

              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field
                    label="Email" name="email"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                   />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer> <v-spacer />
                <v-btn color="primary" @click="enter">Sign In</v-btn>
              </v-card-actions>
            </v-card>
      </v-layout>

</template>

<script>

export default {

  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    enter () {

    }
  }

}
</script>
