<template>
  <div>
    <h2>Total carti 📚{{ calculCarti }}</h2>
    <!-- <b-table striped hover :items="items"></b-table> -->
    <b-col lg="4" class="pb-2"
      ><b-button @click="toggleCreateBook">Adauga Carte</b-button></b-col
    >
    <CreateBook v-if="showCreateBook"></CreateBook>
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
</template>

<script>
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
        "Stoc",
        { key: "Cod_Editura.Nume_Editura", label: "Editura" },
        {
          key: "Delete",
          label: "Delete",
        },
      ],
      showCreateBook: false,
      perPage: 15,
      currentPage: 1,
    };
  },
  components: {
    CreateBook,
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