<template>
  <div>
    <div>
      <NavBar></NavBar>

      <router-view></router-view>
    </div>
    <div class="positioning">
      <FooterBar></FooterBar>
    </div>
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
  }
};
</script>
<style>
.mainApp {
  min-height: 761px !important;
  position: relative;
}
.positioning {
  position: absolute;
  bottom: 0px;
  min-width: 100%;
}
</style>
