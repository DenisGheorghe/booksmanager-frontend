import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Style imports
import './assets/global.css'

// Plugin imports
import router from './pluggins/router'
import './pluggins/bootstrap'

Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
