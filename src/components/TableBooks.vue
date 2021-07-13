<template>
  <div>
    <div class="text-center" v-if="bookLoadingState">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <div v-if="!bookLoadingState">
      <h2>Total carti 📚{{ calculCarti }}</h2>
      <!-- <b-table striped hover :items="items"></b-table> -->
      <div class="row">
        <b-col class="pb-2"
          ><b-button @click="toggleCreateBook">Adauga Carte</b-button></b-col
        >
        <b-col class="pb-2"
          ><b-button @click="toggleUpdateBook">Modifica Carte</b-button></b-col
        >
      </div>
      <CreateBook v-if="showCreateBook"></CreateBook>
      <UpdateBook v-if="showUpdateBook"></UpdateBook>
      <b-table
        class="text-center"
        id="my-table"
        striped
        hover
        :items="getAllBooks"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(Delete)="data">
          <b-button
            size="sm"
            v-on:click="deleteBookClicked(data.item._id)"
            class="mr-1"
            variant="danger"
          >
            Delete
          </b-button>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="getAllBooks.length"
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
import UpdateBook from "./UpdateBook.vue";
import CreateBook from "./CreateBook.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: "ISBN", label: "ISBN" },
        ,
        "Denumire_Carte",
        { key: "Autor.Nume_Autor", label: "Nume Autor" },
        { key: "Autor.Prenume_Autor", label: "Prenume Autor" },
        "Limba",

        { key: "Cod_Editura.Nume_Editura", label: "Editura" },
        "Stoc",
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      showCreateBook: false,
      showUpdateBook: false,
      perPage: 10,
      currentPage: 1,
    };
  },
  components: {
    CreateBook,
    UpdateBook,
  },
  computed: {
    ...mapGetters("books", ["getAllBooks", "bookLoadingState", "calculCarti"]),
  },
  mounted() {
    this.fetchAllBooks();
    console.log(this.getAllBooks);
  },
  methods: {
    ...mapActions("books", ["fetchAllBooks", "deleteBook"]),
    toggleCreateBook() {
      this.showCreateBook = !this.showCreateBook;
      this.showUpdateBook = false;
    },
    toggleUpdateBook() {
      this.showUpdateBook = !this.showUpdateBook;
      this.showCreateBook = false;
    },
    deleteBookClicked(idBook) {
      this.deleteBook(idBook);
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