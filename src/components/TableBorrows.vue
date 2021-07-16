<template>
  <div>
    <div class="text-center" v-if="borrowsLoadingState">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <div v-if="!borrowsLoadingState">
      <h2>Total Imprumuturi 📚{{ getBorrowsCount }}</h2>

      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleCreateBorrow">Adauga Imprumut</b-button>
      </b-col>

      <CreateBorrow v-if="showCreateBorrow"></CreateBorrow>
      <div class="d-flex justify-content-end">
        <b-form-checkbox
          class="boxMod"
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="Doar nereturnate"
          unchecked-value="Toate imprumuturile"
        >
        </b-form-checkbox>
        <div>
          Sunt afisate: <strong>{{ status }}</strong>
        </div>
      </div>

      <b-table
        v-if="status === 'Toate imprumuturile'"
        class="text-center"
        id="my-table"
        striped
        hover
        :items="getAllBorrows"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(test)="data">
          <b
            style="color: red"
            v-if="
              data.item.Returnat == false &&
              data.item.Data_Retur < formatDateCompare(test)
            "
          >
            Termen Depasit
          </b>
          <b
            style="color: green"
            v-else-if="
              data.item.Returnat == true &&
              data.item.Data_Retur >= formatDateCompare(test)
            "
          >
            Returnat la Timp
          </b>

          <b
            style="color: orange"
            v-else-if="
              data.item.Returnat == true &&
              data.item.Data_Retur < formatDateCompare(test)
            "
          >
            Returnat cu intarziere
          </b>

          <b v-else> In proces </b>
        </template>

        <template #cell(Returnat1)="data">
          <b-button
            v-if="data.item.Returnat"
            size="sm"
            v-on:click="setFalse(data.item._id)"
            class="mr-1"
            variant="secondary"
          >
            Returnat
          </b-button>
          <b-button
            v-else
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

      <b-table
        v-if="status === 'Doar nereturnate'"
        class="text-center"
        id="my-table"
        striped
        hover
        :items="getAllBorrowstTrue"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(test)="data">
          <b
            style="color: red"
            v-if="
              data.item.Returnat == false &&
              data.item.Data_Retur < formatDateCompare(test)
            "
          >
            Termen Depasit
          </b>
          <b
            style="color: green"
            v-else-if="
              data.item.Returnat == true &&
              data.item.Data_Retur >= formatDateCompare(test)
            "
          >
            Returnat la Timp
          </b>

          <b
            style="color: orange"
            v-else-if="
              data.item.Returnat == true &&
              data.item.Data_Retur < formatDateCompare(test)
            "
          >
            Returnat cu intarziere
          </b>

          <b v-else> In proces </b>
        </template>

        <template #cell(Returnat1)="data">
          <b-button
            v-if="data.item.Returnat"
            size="sm"
            v-on:click="setFalse(data.item._id)"
            class="mr-1"
            variant="secondary"
          >
            Returnat
          </b-button>
          <b-button
            v-else
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
  </div>
</template>

<script>
import CreateBorrow from "./CreateBorrow.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
const m = moment();
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    return {
      retur: "true",
      status: "Toate imprumuturile",
      fields: [
        { key: "Cod_Cursant.Nume", label: "Nume Cursant" },
        //     { key: "Returnat", label: "Returnat" },
        { key: "Cod_Cursant.Prenume", label: "Prenume Cursant" },

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
          key: "test",
          label: "Status",
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
      test: minDate,
    };
  },
  components: {
    CreateBorrow,
  },
  computed: {
    ...mapGetters("borrows", [
      "getAllBorrows",
      "borrowsLoadingState",
      "getBorrowsCount",
      "getAllBorrowstTrue",
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
    formatDateCompare(value) {
      return moment(value).format("YYYY-MM-DD");
    },
    setTrue(id) {
      this.updateBorrow({
        id,
        Returnat: true,
      });
    },
    setFalse(id) {
      this.updateBorrow({
        id,
        Returnat: false,
      });
    },
  },
};
</script>
<style  scoped>
.boxMod {
  margin-right: 5px !important;
}
</style>
