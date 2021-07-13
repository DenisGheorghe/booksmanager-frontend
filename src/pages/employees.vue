<template>
  <b-container>
    <!-- page title -->
    <b-row class="title-row">
      <h1 class="d-flex justify-content-center titlu">Angajati</h1>
    </b-row>

    <!-- page-content -->
    <b-row>
      <b-col cols="3">
        <SidebarEmployees></SidebarEmployees>
      </b-col>
      <b-col cols="9">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarEmployees from "../components/SidebarEmployees.vue";

export default {
  components: { SidebarEmployees },
  data() {
    return {};
  },
};
</script>
<style scoped>
.title-row {
  min-height: 100px;
}
.titlu {
  padding: 5%;
}
</style>
