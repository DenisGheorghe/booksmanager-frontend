
<template>
  <div>
    <h2>Add a New Author</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="Nume_Editura">Denumire Editura</label>
          <input
            type="text"
            class="form-control"
            id="Nume_Editura"
            placeholder="Nume"
            ref="Nume"
            v-model="form.Nume_Editura"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Numar Telefon</label>
          <input
            type="text"
            class="form-control"
            id="Nr_Tel_Editura"
            placeholder="Prenume"
            ref="Prenume"
            v-model="form.Nr_Tel_Editura"
          />
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" v-on:click="restetInput">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        //  _id: "",
        Nume_Editura: "",
        Nr_Tel_Editura: "",
      },
    };
  },
  methods: {
    ...mapActions("authors", ["addAuthor"]),
    submitForm() {},
    restetInput() {
      this.addAuthor(this.form);

      this.form.Nume_Editura = "";
      this.form.Nr_Tel_Editura = "";
    },
  },
};
</script>