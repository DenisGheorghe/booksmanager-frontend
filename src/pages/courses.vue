<template>
  <b-container>
    <!-- page title -->
    <b-row class="title-row">
      <h1 class="d-flex justify-content-center titlu">Cursuri</h1>
    </b-row>

    <!-- page-content -->
    <b-row>
      <b-col cols="3">
        <SidebarCourses></SidebarCourses>
      </b-col>
      <b-col cols="9">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarCourses from "../components/SidebarCourses.vue";

export default {
  components: { SidebarCourses },
  data() {
    return {};
  },
};
</script>
