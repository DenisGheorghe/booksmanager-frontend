<template>
  <div>
    <h2>Add a New Author</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="Nume_Autor">Nume</label>
          <input
            type="text"
            class="form-control"
            id="Nume_Autor"
            placeholder="Nume"
            ref="Nume"
            v-model="form.Nume_Autor"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Prenume</label>
          <input
            type="text"
            class="form-control"
            id="Prenume_Autor"
            placeholder="Prenume"
            ref="Prenume"
            v-model="form.Prenume_Autor"
          />
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-send" v-on:click="restetInput">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        //  _id: "",
        Nume_Autor: "",
        Prenume_Autor: ""
      }
    };
  },
  methods: {
    ...mapActions("authors", ["addAuthor"]),
    submitForm(a) {
      console.log(a);
    },
    restetInput() {
      this.addAuthor(this.form);

      this.form.Nume_Autor = "";
      this.form.Prenume_Autor = "";
    }
  }
};
</script>
