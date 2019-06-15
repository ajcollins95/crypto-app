import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
