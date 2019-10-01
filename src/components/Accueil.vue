<template>
  <div
    id="e3"
    style="max-width: 50%; margin: auto; min-height : 50%"
    class="grey lighten-3"
  >
    <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
      <v-row>
        <v-col
        v-for= "row in rows"
        :key="row.title"
        :cols="row.flex">
        <v-card>
          <v-card-title>
            {{row.row}}
          </v-card-title>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        </v-col>

      </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rows: [
      { title: 'premier', flex: 12, row: 1 },
      { title: 'second', flex: 12, row: 2 },
      { title: 'troisèem', flex: 12, row: 3 },
      { title: 'quatre', flex: 12, row: 4 },
      { title: 'cinq', flex: 12, row: 5 }
    ]
  })
}
</script>
