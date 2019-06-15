<template>
  <v-card>
    <v-toolbar color="green darken-4">
      <v-flex xs12>
        <v-text-field
          label="Regular"
          single-line
        ></v-text-field>
      </v-flex>
    </v-toolbar>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile :key="index" avatar ripple @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            <v-icon color="grey lighten-1">star_border</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>

export default {

  data () {
    return {
      head: 'Fat',
      exchanges: 'head'
    }
  },
  props: {
    exchange-list: Array
  },
  mounted() {
    alert();
    console.log('work');
  }

}
