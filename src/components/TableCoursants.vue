<template>
  <div>
    <h2>Total cursanti 🎓{{ getCoursantsCount }}</h2>
    <!-- <b-table striped hover :items="items"></b-table> -->
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreateCoursants">Adauga Cursant</b-button></b-col
    >
    <CreateCoursant v-if="showCreateCoursants"></CreateCoursant>
    <b-table
      class="text-center"
      id="my-table"
      striped
      hover
      :items="getAllCoursants"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(Delete)="data">
        <b-button
          size="sm"
          v-on:click="deleteCoursantClicked(data.item._id)"
          class="mr-1"
          variant="danger"
        >
          Delete
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="getAllCoursants.length"
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
import CreateCoursant from "./CreateCoursant.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: [
        "Nume",
        "Prenume",
        "CNP",
        { key: "Nr_Tel", label: "Numar Telefon" },

        { key: "Cod_Curs.Denumire", label: "Curs" },
        "Email",
        "Voluntar",
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      showCreateCoursants: false,
      perPage: 15,
      currentPage: 1,
    };
  },
  components: {
    CreateCoursant,
  },
  computed: {
    ...mapGetters("coursants", [
      "getAllCoursants",
      "coursantsLoadingState",
      "getCoursantsCount",
    ]),
    // totalRequest() {
    //   return this.getAllCoursants.reduce((acc, item) => acc + item.Stoc, 0);
    // },
  },
  mounted() {
    this.fetchAllCoursants();
    console.log(this.getAllCoursants);
  },
  methods: {
    ...mapActions("coursants", [
      "fetchAllCoursants",
      "addCourse",
      "deleteCoursant",
    ]),
    toggleCreateCoursants() {
      this.showCreateCoursants = !this.showCreateCoursants;
    },
    deleteCoursantClicked(idBook) {
      console.warn(idBook);
      this.deleteCoursant(idBook);
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