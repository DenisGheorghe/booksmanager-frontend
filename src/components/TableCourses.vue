<template>
  <div v-if="!courseLoadingState">
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreateAuthor">Adauga Curs</b-button></b-col
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
      <template v-slot:cell(Delete)="">
        <b-button size="sm" v-on: click="" class="mr-1" variant="danger">
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
</template>

<script>
import CreateCourse from "./CreateCourse.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        { key: "Denumire", label: "Denumirea Cursului" },
        "Limba",
        { key: "Tip", label: "Modul de desfasurare" },

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
    ...mapGetters("courses", ["getAllCourses", "courseLoadingState"]),
  },
  mounted() {
    this.fetchAllCourses();
    console.log(this.getAllCourses);
  },
  methods: {
    ...mapActions("courses", ["fetchAllCourses"]),
    toggleCreateAuthor() {
      this.showCreateCourse = !this.showCreateCourse;
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