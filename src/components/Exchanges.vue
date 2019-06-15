<template>
  <v-card max-height='500px' class='scroll-y'>
    <v-toolbar color="green darken-4">
      <v-flex xs12>
        <v-text-field
          label="Exchange"
          single-line
          append-icon="search"
          v-model="search"
          color='black'
        ></v-text-field>

      </v-flex>
    </v-toolbar>

    <v-list color='orange'>
      <template v-for="(exchange, index) in filteredExchanges">
        <v-list-tile :key="index"
        ripple
        :disabled='isSelected'
        @click="selectExchange(exchange)">
          <v-list-tile-content>
            <v-list-tile-title>{{ exchange }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider ></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      search: "",
      exchange: ""
    }
  },
  props: ['exchanges'],
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
    },
    isSelected: function() {
      return (this.exchange != "")
    }
  }

}

</script>
