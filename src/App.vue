<template>
  <div>
    <NavBar></NavBar>

    <!-- <h1>Aplicatia lui Denis</h1>
    <router-link to="/home">Go to HomePage</router-link>
    <router-link to="/contact">Go to Contacts</router-link>
    <router-link to="/register">Go to Register</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./pages/home";
import axios from "axios";
import ContactPage from "./pages/contact";
import RegisterPage from "./components/register";
import NavBar from "./components/NavBar";
// import CreateAuthor from './components/CreateAuthor.vue'

export default {
  name: "app",
  components: { HomePage, ContactPage, RegisterPage, NavBar },
  methods: {},
  data() {
    return {};
  },
};
</script>