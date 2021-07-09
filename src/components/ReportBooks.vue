<template>
  <div>
    <div class="row">
      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleSearchLanguage">Raport dupa Limba</b-button>
        <form v-on:submit.prevent v-if="showSearchLanguage">
          <input type="text" v-model="reportLanguage" />
          <button class="btn btn-primary" v-on:click="submitFormLang">
            Trimite
          </button>
        </form>
      </b-col>
      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleSearchAuthor">Raport dupa Autor</b-button>
        <div v-on:submit.prevent v-if="showSearchAuthor">
          <input type="text" v-model="reportAuthor" />
          <button class="btn btn-primary" v-on:click="submitFormAuth">
            Trimite
          </button>
        </div>
      </b-col>
    </div>
    <b-table
      class="text-center"
      id="my-table"
      striped
      hover
      :items="this.lista"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="this.lista.length"
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
import axios from "axios";

export default {
  data() {
    return {
      reportLanguage: "",
      reportAuthor: "",
      lista: [],
      fields: [
        { key: "ISBN", label: "ISBN" },
        ,
        "Denumire_Carte",
        { key: "Autor.Nume_Autor", label: "Nume Autor" },
        { key: "Autor.Prenume_Autor", label: "Prenume Autor" },
        "Limba",
        "Stoc",
        { key: "Cod_Editura.Nume_Editura", label: "Editura" },
      ],
      showSearchLanguage: false,
      showSearchAuthor: false,
      perPage: 15,
      currentPage: 1,
    };
  },

  methods: {
    submitFormLang() {
      console.log(this.reportLanguage);
      axios
        .get(
          `http://localhost:4000/api/carti/get/language/${this.reportLanguage}`
        )
        .then((resp) => {
          (this.lista = []), console.warn(this.abc);
          console.warn(resp.data);
          this.lista = resp.data;
        });
      this.report = "";
    },
    toggleSearchLanguage() {
      this.showSearchLanguage = !this.showSearchLanguage;
    },
    toggleSearchAuthor() {
      this.showSearchAuthor = !this.showSearchAuthor;
    },
    submitFormAuth() {
      console.log(this.report);
      axios
        .get(`http://localhost:4000/api/carti/get/author/${this.reportAuthor}`)
        .then((resp) => {
          (this.lista = []), console.warn(this.abc);
          console.warn(resp.data);
          this.lista = resp.data;
        });
      this.reportLanguage = "";
      this.reportAuthor = "";
    },
  },
};
</script>