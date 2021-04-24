<template>
<div>
  <h1>Aplicatia lui Denis</h1>
  <pre>{{userData}}</pre>

  <ul>
    <li v-for="username in userData.users" :key="username"> {{username}}</li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
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