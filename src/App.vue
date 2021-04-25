<template>
<div>
  <h1>Aplicatia lui Denis</h1>
  <pre>{{userData}}</pre>

  <ul>
    <li v-for="username in userData.users" :key="username"> {{username}}</li>
  </ul>
    <router-link to="/home">Go to HomePage</router-link>
    <router-link to="/contact">Go to Contacts</router-link>
<router-view></router-view>
</div>
  
</template>

<script>
import HomePage from './pages/home';
import axios from 'axios';  
import ContactPage from './pages/contact';

export default {
  name: 'app',
  components:{HomePage, ContactPage},
  methods: {
  
  },
  data () {
    return {
      userData: {}
    }
  },
   mounted () {
    axios
      .get('http://localhost:4000/users')
      .then(response => (this.userData = response.data))
  }
}

</script>