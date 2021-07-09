<template>
  <div>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-coursants' }"
          >Lista Cursanti</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>{{
          getCoursantsCount
        }}</b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-courses' }"
          >Lista Cursuri</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>{{
          getCoursesCount
        }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Courses: [],
    };
  },
  computed: {
    ...mapGetters("courses", ["getCoursesCount"]),
    ...mapGetters("coursants", ["getCoursantsCount"]),
  },
};
</script>
<style scoped>
.badgecustom {
  position: absolute;
  right: 1rem;
  width: 2rem;

  top: 1.1rem;
}
</style>
