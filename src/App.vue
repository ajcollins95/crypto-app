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
            :isDisabled="state != 'exchange'"
            @selectExchange='updateExchange($event)'>
            </Exchanges>
          </v-flex>

          <v-flex xs4>
            <Pairs />
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
import Pairs from './components/Pairs'
import Latest from './components/Latest'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Exchanges,
    Pairs
  },
  data () {
    return {
      ccxt: {},
      exchangeID: "",
      pair: [],
      state: 'exchange'

      //
    }
  },
  methods: {
    updateExchange: function(newExchange) {
      this.exchangeID = newExchange
      this.state = 'pairs'
      console.log(newExchange)
      let exchange = new this.ccxt[newExchange]
      exchange.fetchMarkets()
        .then(data => {console.log(data);})
        .catch(e => {console.log(e);})


    }
  },
  computed: {

  },
  created() {
    let ccxt = require('ccxt');
    this.ccxt = ccxt;
    console.log(this.ccxt.exchanges);
  },
}
</script>
