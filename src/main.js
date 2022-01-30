import 'es6-promise/auto'

import Vue from 'vue'
import App from './App.vue'

// Style imports
import './assets/global.css'

// Plugin imports
import router from './pluggins/router'
import store from './store'
import './pluggins/bootstrap'



new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App),
})