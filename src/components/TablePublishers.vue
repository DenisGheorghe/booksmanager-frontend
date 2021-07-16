<template>
  <div v-if="!publisherLoadingState">
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreatePublisher">Adauga Editura</b-button></b-col
    >
    <CreatePublisher v-if="showCreatePublisher"></CreatePublisher>
    <b-table
      class="text-center"
      id="my-table"
      striped
      hover
      :items="getAllPublishers"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(Delete)="data">
        <b-button
          size="sm"
          v-on:click="deletePublisherClicked(data.item._id)"
          class="mr-1"
          variant="danger"
        >
          Delete
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="getAllPublishers.length"
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
import CreatePublisher from "./CreatePublisher.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        { key: "Nume_Editura", label: "Denumire Editura" },
        { key: "Nr_Tel_Editura", label: "Numar de Telefon" },
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      perPage: 15,
      currentPage: 1,
      showCreatePublisher: false,
    };
  },
  components: {
    CreatePublisher,
  },

  computed: {
    ...mapGetters("publishers", ["getAllPublishers", "publisherLoadingState"]),
  },
  mounted() {
    this.fetchAllPublishers();
    console.log(this.getAllPublishers);
  },
  methods: {
    ...mapActions("publishers", ["fetchAllPublishers", "deletePublisher"]),
    toggleCreatePublisher() {
      this.showCreatePublisher = !this.showCreatePublisher;
    },
    deletePublisherClicked(idPublisher) {
      this.deletePublisher(idPublisher);
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