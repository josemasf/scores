<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" text>
        <v-toolbar-title>Julititi´s scores</v-toolbar-title>        
      </v-btn>
      <v-spacer />
      <div>
          <v-img :src="require('./assets/girl.svg')" contain height="50" width="50" />
        </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
      <v-btn to="/">
        <span>Partidas</span>

        <v-icon>mdi-gamepad-square</v-icon>
      </v-btn>


      <v-btn to="/adversaries">
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

  data: () => ({ value: 0 }),

    computed: {
      color () {
        const color: {[key: string]: string} = {
          0: 'blue-grey',
          1: 'teal',
          2: 'brown',
          3: 'indigo',
        }
        return color[this.value] || 'blue-grey'
      },
    },
});
</script>
