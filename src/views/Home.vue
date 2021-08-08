<template>
  <section>
    <v-container>
      <v-row dense>
        <v-col cols="6" md="3">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              Añadir nuevo juego
            </v-card-title>

            <v-card-subtitle>Hacer click aquí para empezar el registro de un nuevo juego.</v-card-subtitle>

            <v-card-actions>
              <v-btn block x-large>
                Nueva partida
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" v-text="item.title"></v-card-title>
                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
            <v-card-actions>
              <v-btn block x-large>
                Ver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  //import HelloWorld from '../components/HelloWorld.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      //HelloWorld,
    },
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
  })
</script>
