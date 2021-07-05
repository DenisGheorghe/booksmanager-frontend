
<template>
  <div>
    <h2>Adauga un nou Angajat</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="Nume">Nume</label>
          <input
            type="text"
            class="form-control"
            id="Nume"
            placeholder="Nume"
            ref="Nume"
            v-model="form.Nume"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Prenume</label>
          <input
            type="text"
            class="form-control"
            id="Prenume"
            placeholder="Prenume"
            ref="Prenume"
            v-model="form.Prenume"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Numar Telefon</label>
          <input
            type="text"
            class="form-control"
            id="Nr_Tel"
            placeholder="Numar telefon"
            ref="Nr_Tel"
            v-model="form.Nr_Tel"
            maxlength="10"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Email</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Email"
            ref="Email"
            v-model="form.Email"
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
import { mapActions } from "vuex";

export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        //  _id: "",
        Nume: "",
        Prenume: "",
        Nr_Tel: "",
        Email: "",
      },
    };
  },
  methods: {
    ...mapActions("employees", ["addEmployee"]),
    submitForm(a) {
      console.log(a);
    },
    restetInput() {
      this.addEmployee(this.form);

      this.form.Nume = "";
      this.form.Prenume = "";
      this.form.Nr_Tel = "";
      this.form.Email = "";
    },
  },
};
</script>