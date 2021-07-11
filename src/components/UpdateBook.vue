<template>
  <div>
    <h2>Adauga o noua carte</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">Alegeti Cartea</label> <br />
          <b-form-input
            v-model="form.id"
            list="my-list-id_Carte"
          ></b-form-input>
          <datalist id="my-list-id_Carte">
            <option
              v-for="Carte in getAllBooks"
              :value="Carte._id"
              :key="Carte._id"
            >
              {{ Carte.Denumire_Carte }}
            </option>
          </datalist>
        </div>
        <div class="form-group col-md-6">
          <label for="text">Denumire Carte</label>
          <input
            type="text"
            class="form-control"
            id="Denumire_Carte"
            placeholder="Denumire Carte"
            v-model="form.Denumire_Carte"
            ref="Denumire_Carte"
          />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">Limba Carte</label>
          <input
            type="text"
            class="form-control"
            id="Limba"
            placeholder="Limba Cartii"
            v-model="form.Limba"
            ref="LimbaCarte"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Autor</label> <br />
          <b-form-input
            v-model="form.Autor"
            list="my-list-id"
            placeholder="Autor"
          ></b-form-input>
          <datalist id="my-list-id">
            <option
              v-for="autor in getAllAuthors"
              :value="autor._id"
              :key="autor._id"
            >
              {{ autor.Nume_Autor }} {{ autor.Prenume_Autor }}
            </option>
          </datalist>
        </div>

        <div class="form-group col-md-6">
          <label for="text">Numar Exemplare</label>
          <input
            type="text"
            class="form-control"
            id="Stoc"
            placeholder="Numar Exemplare"
            v-model="form.Stoc"
            ref="Stoc"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="text">Editura</label> <br />
          <b-form-input
            v-model="form.Cod_Editura"
            list="my-list-ids"
            placeholder="Editura"
          ></b-form-input>
          <datalist id="my-list-ids">
            <option
              v-for="publisher in getAllPublishers"
              :value="publisher._id"
              :key="publisher._id"
            >
              {{ publisher.Nume_Editura }}
            </option>
          </datalist>
        </div>
      </div>
      <div class="form-group col-md-6">
        <br />
        <button class="btn btn-primary" v-on:click="restetInput">
          Trimite
        </button>
        <br />
        <br />
      </div>
    </form>
  </div>
</template>
<script>
import { updateLocale } from "moment";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        id: "",
        ISBN: "",
        Denumire_carte: "",
        Autor: "",
        Limba: "",
        Stoc: "",
        Cod_Editura: "",
      },
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:4000/api/autori/get")
  //     .then((resp) => {
  //       this.list = resp.data;
  //       console.log(resp);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },

  computed: {
    ...mapGetters("authors", ["getAllAuthors", "authorLoadingState"]),
    ...mapGetters("books", ["getAllBooks"]),
    ...mapGetters("publishers", ["getAllPublishers", "publisherLoadingState"]),
  },
  mounted() {
    this.fetchAllAuthors();
    this.fetchAllPublishers();
    this.fetchAllPublishers();
  },
  methods: {
    ...mapActions("books", ["fetchAllBooks", "updateBook"]),
    ...mapActions("authors", ["fetchAllAuthors"]),
    ...mapActions("publishers", ["fetchAllPublishers"]),
    submitForm() {},
    restetInput() {
      let formUpdated = JSON.parse(JSON.stringify(this.form));
      Object.keys(formUpdated).forEach((field) => {
        if (formUpdated[field] == "") {
          delete formUpdated[field];
        }
      });
      this.updateBook(formUpdated);
      this.form._id = "";
      this.form.ISBN = "";
      this.form.Denumire_Carte = "";
      this.form.Autor = "";
      this.form.Limba = "";
      this.form.Stoc = "";
      this.form.Cod_Editura = "";
    },
  },
};
</script>