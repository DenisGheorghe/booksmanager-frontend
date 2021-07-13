<template>
  <div>
    <div class="mainApp">
      <NavBar></NavBar>

      <router-view></router-view>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HomePage from "./pages/home";
import CoursesPage from "./pages/courses";
import RegisterPage from "./components/register";
import NavBar from "./components/NavBar";
import FooterBar from "./components/footer.vue";
// import CreateAuthor from './components/CreateAuthor.vue'

export default {
  name: "app",
  components: { HomePage, CoursesPage, RegisterPage, NavBar, FooterBar },
  methods: {},
  data() {
    return {};
  },
};
</script>
<style>
.mainApp {
  min-height: 761px !important;
}
</style>