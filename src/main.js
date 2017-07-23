// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import transfer from './transfer.vue'
import store from './vuex/index'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

require('babel-polyfill')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(transfer)
})
