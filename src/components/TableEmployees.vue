<template>
  <div>
    <h2>Total Angajati: 💼 {{ getEmployeeCount }}</h2>
    <div v-if="!employeeLoadingState">
      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleCreateEmployee"
          >Adauga Angajat</b-button
        ></b-col
      >
      <CreateEmployee v-if="showCreateEmployee"></CreateEmployee>
      <b-table
        class="text-center"
        id="my-table"
        striped
        hover
        :items="getAllEmployees"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(Delete)="data">
          <b-button
            size="sm"
            v-on:click="deleteEmployeeClicked(data.item._id)"
            class="mr-1"
            variant="danger"
          >
            Delete
          </b-button>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="getAllEmployees.length"
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
import CreateEmployee from "./CreateEmployee.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        "Nume",
        "Prenume",
        { key: "Nr_Tel", label: "Numar Telefon" },
        "Email",
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      perPage: 15,
      currentPage: 1,
      showCreateEmployee: false,
    };
  },
  components: {
    CreateEmployee,
  },

  computed: {
    ...mapGetters("employees", [
      "getAllEmployees",
      "employeeLoadingState",
      "getEmployeeCount",
    ]),
  },
  mounted() {
    this.fetchAllEmployees();
    console.log(this.getAllEmployees);
  },
  methods: {
    ...mapActions("employees", ["fetchAllEmployees", "deleteEmployee"]),
    toggleCreateEmployee() {
      this.showCreateEmployee = !this.showCreateEmployee;
    },

    deleteEmployeeClicked(idEmployee) {
      this.deleteEmployee(idEmployee);
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