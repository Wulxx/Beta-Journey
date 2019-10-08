<template>
          <v-dialog max-width="500px">
          <v-card>
            <v-card-text>
              <v-card-title>
                Ajouter une image
              </v-card-title>
              <v-text-field label="File name"></v-text-field>
              <v-text-field label="Lieu"></v-text-field>
              <v-text-field label="Stourney"></v-text-field>
               <v-file-input
                  label="File input"
                  filled
                  counter
                  multiple
                  accept="image/*"
                  prepend-icon="mdi-camera"
                ></v-file-input>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>
