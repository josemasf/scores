<template>
  <section>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="3">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              Añadir nuevo juego
            </v-card-title>

            <v-card-subtitle>Hacer click aquí para empezar el registro de un nuevo juego.</v-card-subtitle>

            <v-card-actions>
              <v-btn block x-large @click="dialog = !dialog">
                Nueva partida
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12" md="3">
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
    <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>            
            <v-btn v-for="(player, index) in playerInGame" :key="player" @click="deletePlayer(index)">{{player}}</v-btn>
          </v-card-text>
          <v-divider />
          <v-col
            cols="12"            
          >
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
              aria-autocomplete="false"
              v-model="player"
            ></v-text-field>
            <v-btn text @click="addNewPlayer()">Añadir</v-btn>
          </v-col>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  //import HelloWorld from '../components/HelloWorld.vue'

  @Component({
    name: 'Home'
  })
  export default class Home extends Vue {
    items= [
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
      ]
      dialog= false
      player= ''
      select=[
        { text: 'Baraja española' },
        { text: 'Uno' },
        { text: 'Dobble' },
      ]

      playerInGame: string[] = []

      addNewPlayer(): void{        
        this.playerInGame.push(this.player)
        this.player = '';
      }
      deletePlayer(index: number):void{
        this.playerInGame.splice(index, 1)
      }
  }

  
</script>
