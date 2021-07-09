<template>
  <div>
    <h2>Total Imprumuturi 📚{{ getBorrowsCount }}</h2>

    <!-- <b-table striped hover :items="items"></b-table> -->
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreateBorrow">Adauga Carte</b-button></b-col
    >
    <CreateBorrow v-if="showCreateBorrow"></CreateBorrow>
    <b-table
      class="text-center"
      id="my-table"
      striped
      hover
      :items="getAllBorrows"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(Returnat1)="data">
        <b-button
          size="sm"
          v-on:click="setTrue(data.item._id)"
          class="mr-1"
          variant="success"
        >
          Returnare
        </b-button>
      </template>
      <template #cell(CartiImprumutate)="data">
        <span v-for="carte in data.item.Carti" :key="carte._id">
          {{ carte.Cod_Carte.Denumire_Carte }} <br />
        </span>
      </template>
      <template #cell(Delete)="data">
        <b-button
          size="sm"
          v-on:click="deleteBorrowClicked(data.item._id)"
          class="mr-1"
          variant="danger"
        >
          Delete
        </b-button>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="getAllBorrows.length"
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
import CreateBorrow from "./CreateBorrow.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
const m = moment();
export default {
  data() {
    return {
      fields: [
        { key: "Cod_Cursant.Nume", label: "Nume Cursant" },
        { key: "Returnat", label: "Returnat" },
        { key: "Cod_Cursant.Prenume", label: "Prenume Cursant" },
        { key: "Cod_Curs.Denumire", label: "Curs" },
        {
          key: "Data_Imprumut",
          label: "Data Imprumut",
          formatter: "formatDateAssigned",
        },
        {
          key: "Data_Retur",
          label: "Data Retur",
          formatter: "formatDateAssigned2",
        },
        {
          key: "CartiImprumutate",
          label: "Carti Imprumutate",
        },
        {
          key: "Returnat1",
          label: "Actiuni",
        },
        {
          key: "Delete",
        },
      ],
      showCreateBorrow: false,
      perPage: 15,
      currentPage: 1,
      list: [],
    };
  },
  components: {
    CreateBorrow,
  },
  computed: {
    ...mapGetters("borrows", [
      "getAllBorrows",
      "borrowLoadingState",
      "getBorrowsCount",
    ]),
  },
  mounted() {
    this.fetchAllBorrows();
    console.log(this.getAllBorrows);
  },
  methods: {
    ...mapActions("borrows", [
      "fetchAllBorrows",
      "deleteBorrow",
      "updateBorrow",
    ]),
    toggleCreateBorrow() {
      this.showCreateBorrow = !this.showCreateBorrow;
    },
    deleteBorrowClicked(idBorrow) {
      console.warn(idBorrow);
      this.deleteBorrow(idBorrow);
    },
    formatDateAssigned(value) {
      return moment(value).format("DD.MM.YYYY");
    },
    formatDateAssigned2(value) {
      return moment(value).format("DD.MM.YYYY");
    },
    setTrue(id) {
      this.updateBorrow({
        id,
        Returnat: true,
      });
    },
    toggleDetails() {},
  },
};
</script>

