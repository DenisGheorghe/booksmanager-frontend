<template>
  <div>
    <div class="text-center" v-if="coursantsLoadingState">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <div v-if="!coursantsLoadingState">
      <h2>Total cursanti 🎓{{ getCoursantsCount }}</h2>
      <!-- <b-table striped hover :items="items"></b-table> -->
      <div class="row">
        <b-col lg="4" class="pb-2"
          ><b-button @click="toggleCreateCoursants"
            >Adauga Cursant</b-button
          ></b-col
        >
        <b-col class="pb-2"
          ><b-button @click="toggleUpdateCoursants"
            >Modifica Cursant</b-button
          ></b-col
        >
      </div>
      <CreateCoursant v-if="showCreateCoursants"></CreateCoursant>
      <UpdateCoursant v-if="showUpdateCoursants"></UpdateCoursant>
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
        <template #cell(adresa)="data">
          <p class="text-info">
            {{ data.item.StradaSiNumar }}, {{ data.item.Oras }},
            {{ data.item.Tara }}
          </p>
        </template>

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
  </div>
</template>

<script>
import CreateCoursant from "./CreateCoursant.vue";
import UpdateCoursant from "./UpdateCoursant.vue";
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
          key: "adresa",
          label: "Adresa",
        },
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      showCreateCoursants: false,
      showUpdateCoursants: false,
      perPage: 10,
      currentPage: 1,
    };
  },
  components: {
    CreateCoursant,
    UpdateCoursant,
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
      this.showUpdateCoursants = false;
    },
    toggleUpdateCoursants() {
      this.showUpdateCoursants = !this.showUpdateCoursants;
      this.showCreateCoursants = false;
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
.text-info {
  color: black !important;
}
td {
  vertical-align: middle !important;
}
</style>