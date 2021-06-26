
<template>
  <div>
    <h2>Add a New Author</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">ISBN</label>
          <input
            type="text"
            class="form-control"
            id="_id"
            placeholder="ISBN"
            v-model="form._id"
            ref="_id"
          />
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
          <b-form-select v-model="form.Autor" class="mb-6">
            <b-form-select-option
              v-for="autor in getAllAuthors"
              :value="autor._id"
              :key="autor._id"
              refs="Autor"
            >
              {{ autor.Nume_Autor }} {{ autor.Prenume_Autor }}
            </b-form-select-option>
          </b-form-select>
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
          <label for="text">Cod Editura</label>
          <input
            type="text"
            class="form-control"
            id="Cod_Editura"
            placeholder="Editura"
            v-model="form.Cod_Editura"
            ref="Cod_Editura"
          />

          <!-- <div class="form-group col-md-6">
        <label for="text">Autor</label> <br/>
        <b-form-select v-model="form.Autor" class="mb-6">
          <b-form-select-option v-for="autor in list" :value="autor._id" :key="autor._id">
            {{ autor.Nume_Autor }} {{ autor.Prenume_Autor }}
          </b-form-select-option>
        </b-form-select>
      </div> -->
        </div>
      </div>
      <div class="form-group col-md-6">
        <button class="btn btn-primary" v-on:click="restetInput">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        _id: "",
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
  },
  mounted() {
    this.fetchAllAuthors();
    console.log(this.getAllAuthors);
  },
  methods: {
    ...mapActions("books", ["addBook"]),
    ...mapActions("authors", ["fetchAllAuthors"]),
    submitForm() {},
    restetInput() {
      debugger;
      this.addBook(this.form);

      this.form._id = "";
      this.form.Denumire_carte = "";
      this.form.Autor = "";
      this.form.Limba = "";
      this.form.Stoc = "";
      this.form.Cod_Editura = "";
    },
  },
};
</script>