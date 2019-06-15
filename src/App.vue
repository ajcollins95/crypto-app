<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase" >
        <span>Crypto</span>
        <span class="font-weight-light">CURRENCY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>


    <v-content>
      <v-container grid-list-md>
        <v-layout row>
          <v-flex xs4>
            <Exchanges
            :exchanges='ccxt.exchanges'
            @selectExchange='updateExchange($event)'>
            </Exchanges>
          </v-flex>
          <v-flex xs4>

          </v-flex>
          <v-flex xs4>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Exchanges from './components/Exchanges'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Exchanges
  },
  data () {
    return {
      ccxt: {},
      exchange: ""
      //
    }
  },
  methods: {
    updateExchange: function(newExchange) {
      this.exchange = newExchange
      console.log(newExchange)
    }
  },
  created() {
    let ccxt = require('ccxt');
    this.ccxt = ccxt;
    console.log(this.ccxt.exchanges);
  },
}
</script>
