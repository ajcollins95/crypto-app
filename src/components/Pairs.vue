<template>
  <div class="">
    <v-card max-height='250px' class='scroll-y'>

      <v-toolbar color="green darken-4">
        <v-flex xs12>
          <v-text-field
          label="Base"
          single-line
          append-icon="search"
          v-model="search"
          color='black'
          ></v-text-field>
        </v-flex>
      </v-toolbar>

      <v-list>
        <template v-for="(exchange_i, index) in filteredExchanges">
          <v-list-tile :key="index"
          ripple
          :class="{'black--text': (exchange == exchange_i)}"
          @click="selectExchange(exchange_i)">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ exchange_i }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider ></v-divider>
        </template>
      </v-list>

    </v-card>


  </div>
</template>

<script>

export default {
  data() {
    return {
      search: "",
      exchange: ""
    }
  },
  props: {
    exchanges: Array,
    isDisabled: Boolean
  },
  methods: {
    selectExchange: function(exchange) {
      this.exchange = exchange
      this.$emit('selectExchange',exchange)
    }
  },
  computed: {
    filteredExchanges: function() {
      if (this.search == '') { return [] }
      return this.exchanges.filter((exchange) => {
        return exchange.match(this.search)
      })
    }
  }

}

</script>

<style scoped>

.active {
  background: 'yellow';
}

</style>
