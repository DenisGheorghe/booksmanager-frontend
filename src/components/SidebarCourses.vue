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
          countCourses()
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
          countCourses()
        }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Courses: [],
    };
  },
  computed: {
    ...mapGetters("books", ["getCartiCount"]),
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/cursuri/get")
      .then((resp) => {
        this.Courses = resp.data;
        console.log(resp);
      })
      .catch((err) => {
        console.err(err);
      });
  },
  methods: {
    countCourses() {
      var countAutor = 0;
      for (var i = 0; i < this.Courses.length; ++i) {
        countAutor++;
      }
      return countAutor;
    },
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
