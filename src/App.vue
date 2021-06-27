<template>
  <div>
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./pages/home";
import CoursesPage from "./pages/courses";
import RegisterPage from "./components/register";
import NavBar from "./components/NavBar";
// import CreateAuthor from './components/CreateAuthor.vue'

export default {
  name: "app",
  components: { HomePage, CoursesPage, RegisterPage, NavBar },
  methods: {},
  data() {
    return {};
  },
};
</script>