<template>
  <div v-if="!authorLoadingState">
    <!-- <b-table striped hover :items="items"></b-table> -->
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreateAuthor">Add Author</b-button></b-col
    >
    <CreateAuthor v-if="showCreateAuthor"></CreateAuthor>
    <b-table
      id="my-table"
      striped
      hover
      :items="getAllAuthors"
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
      :total-rows="getAllAuthors.length"
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
import CreateAuthor from "./CreateAuthor.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        "Nume_Autor",
        "Prenume_Autor",
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      perPage: 15,
      currentPage: 1,
      showCreateAuthor: false,
    };
  },
  components: {
    CreateAuthor,
  },

  computed: {
    ...mapGetters("authors", ["getAllAuthors", "authorLoadingState"]),
  },
  mounted() {
    this.fetchAllAuthors();
    console.log(this.getAllAuthors);
  },
  methods: {
    ...mapActions("authors", ["fetchAllAuthors"]),
    toggleCreateAuthor() {
      this.showCreateAuthor = !this.showCreateAuthor;
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