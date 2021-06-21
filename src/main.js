import Vue from 'vue'
import 'es6-promise/auto'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'Vuex'
// Style imports
import './assets/global.css'

// Plugin imports
import router from './pluggins/router'
import './pluggins/bootstrap'

Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App),
})

const store = new Vuex.Store({
  state() {
    return {
        counter: 0
    };
},
  actions: {},
  getters: {},
  mutations: {}
})
// const Store = createStore({

// })

// const app = createApp(App); 
// app.use(Store);
// app.mount ('#app')