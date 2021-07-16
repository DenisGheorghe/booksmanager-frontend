<template>
  <div>
    <div class="text-center" v-if="couseLoadingState">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <div v-if="!couseLoadingState">
      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleCreateCourse">Adauga Curs</b-button></b-col
      >
      <CreateCourse v-if="showCreateCourse"></CreateCourse>
      <b-table
        class="text-center"
        id="my-table"
        striped
        hover
        :items="getAllCourses"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(Delete)="data">
          <b-button
            size="sm"
            v-on:click="deleteCourseClicked(data.item._id)"
            class="mr-1"
            variant="danger"
          >
            Delete
          </b-button>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="getAllCourses.length"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      ></b-pagination>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CreateCourse from "./CreateCourse.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        "Denumire",
        "Limba",
        "Tip",
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      perPage: 15,
      currentPage: 1,
      showCreateCourse: false,
    };
  },
  components: {
    CreateCourse,
  },

  computed: {
    ...mapGetters("courses", ["getAllCourses", "couseLoadingState"]),
  },
  mounted() {
    this.fetchAllCourses();
    console.log(this.getAllCourses);
  },
  methods: {
    ...mapActions("courses", ["fetchAllCourses", "deleteCourse"]),
    toggleCreateCourse() {
      this.showCreateCourse = !this.showCreateCourse;
    },

    deleteCourseClicked(idCourse) {
      this.deleteCourse(idCourse);
    },
  },
};
</script>

<style>
#abc {
  margin: auto;
  width: 50%;
  padding: 10px;
  max-width: 50% !important;
}
</style>