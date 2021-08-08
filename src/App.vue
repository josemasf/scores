<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          :src="require('./assets/girl.svg')"          
          contain
          height="50"
        />
        Julititi´s scores       
          
      </div>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
    
  >
  
    <v-btn to="/" >
      <span>Partidas</span>

      <v-icon>mdi-gamepad-square</v-icon>
    </v-btn>
  
  
    <v-btn to="/about">
      <span>Adversarios</span>

      <v-icon>mdi-account-supervisor-circle</v-icon>
    </v-btn> 
  
  </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
});
</script>
