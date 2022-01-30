<template>
  <div>
    <h2>Adauga o noua carte</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">ISBN</label>
          <input
            type="text"
            class="form-control"
            id="ISBN"
            placeholder="ISBN"
            v-model="form.ISBN"
            ref="ISBN"
            maxlength="13"
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
          <b-form-input
            v-model="form.Autor"
            list="my-list-id"
            placeholder="Autor"
          ></b-form-input>
          <datalist id="my-list-id">
            <option v-for="autor in getAllAuthors" :key="autor._id">
              {{ autor.Nume_Autor }} {{ autor.Prenume_Autor }}
            </option>
            <!-- <option v-for="[key, value] of this.mapa" :value="value" :key="key">
              {{ autor.Nume_Autor }} {{ autor.Prenume_Autor }}
            </option> -->
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
            <option v-for="publisher in getAllPublishers" :key="publisher._id">
              {{ publisher.Nume_Editura }}
            </option>
          </datalist>
        </div>
      </div>
      <div class="form-group col-md-6">
        <button class="btn btn-primary btn-send" v-on:click="restetInput">
          Trimite
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        ISBN: "",
        Denumire_carte: "",
        Autor: "",
        Limba: "",
        Stoc: "",
        Cod_Editura: ""
      }
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
    //Import getters
    ...mapGetters("authors", ["getAllAuthors", "authorLoadingState"]),
    ...mapGetters("publishers", ["getAllPublishers", "publisherLoadingState"])
  },
  mounted() {
    //Fetch the data
    this.fetchAllAuthors();

    this.fetchAllPublishers();
  },
  methods: {
    //Add the maps for books, authors and publishers
    ...mapActions("books", ["addBook"]),
    ...mapActions("authors", ["fetchAllAuthors"]),
    ...mapActions("publishers", ["fetchAllPublishers"]),
    submitForm() {},
    restetInput() {
      /* Maps the _id of the Authors and Publishers with the Name. The inputed name will then be associated with
       the_id and be sent back to the database while respectig the database's structure. */

      const authList = this.getAllAuthors;
      const pubList = this.getAllPublishers;
      const mapAuthor = new Map();
      const mapPublisher = new Map();
      console.log("=============================");
      for (let i = 0; i < authList.length; i++) {
        mapAuthor.set(
          authList[i].Nume_Autor + " " + authList[i].Prenume_Autor,
          authList[i]._id
        );
      }
      for (let i = 0; i < pubList.length; i++) {
        mapPublisher.set(pubList[i].Nume_Editura, pubList[i]._id);
      }

      let authReplace = mapAuthor.get(this.form.Autor);
      let pubReplace = mapPublisher.get(this.form.Cod_Editura);
      this.form.Autor = authReplace;
      this.form.Cod_Editura = pubReplace;
      //Send the form
      this.addBook(this.form);
      //Clear the form fields
      this.form.ISBN = "";
      this.form.Denumire_Carte = "";
      this.form.Autor = "";
      this.form.Limba = "";
      this.form.Stoc = "";
    }
  }
};
</script>
