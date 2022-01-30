<template>
  <div>
    <h2>Adauga Cursant</h2>
    <form v-on:submit.prevent>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">Nume</label>
          <input
            type="text"
            class="form-control"
            id="Nume"
            placeholder="Nume"
            v-model="form.Nume"
            ref="Nume"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Prenume</label>
          <input
            type="text"
            class="form-control"
            id="Prenume"
            placeholder="Prenume"
            v-model="form.Prenume"
            ref="Prenume"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">CNP</label>
          <input
            maxlength="13"
            type="text"
            class="form-control"
            id="CNP"
            placeholder="CNP"
            v-model="form.CNP"
            ref="CNP"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Nr_Tel</label>
          <input
            type="text"
            class="form-control"
            id="Nr_Tel"
            placeholder="Numar de telefon"
            v-model="form.Nr_Tel"
            ref="Nr_Tel"
            maxlength="10"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Email</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Adresa de email"
            v-model="form.Email"
            ref="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Strada</label>
          <input
            type="text"
            class="form-control"
            id="StradaSiNumar"
            placeholder="Strada si Numar"
            v-model="form.StradaSiNumar"
            ref="StradaSiNumar"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Oras</label>
          <input
            type="text"
            class="form-control"
            id="Oras"
            placeholder="Strada si Numar"
            v-model="form.Oras"
            ref="Oras"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="text">Judet</label>
          <input
            type="text"
            class="form-control"
            id="Judet"
            placeholder="Strada si Numar"
            v-model="form.Judet"
            ref="Judet"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="text">Tara</label>
          <input
            type="text"
            class="form-control"
            id="Tara"
            placeholder="Strada si Numar"
            v-model="form.Tara"
            ref="Tara"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="text">Curs</label> <br />
          <b-form-input
            v-model="form.Cod_Curs"
            list="my-list-ids"
            placeholder="Alegeti cursul"
          ></b-form-input>
          <datalist id="my-list-ids">
            <option
              v-for="course in getAllCourses"
              :value="course._id"
              :key="course._id"
            >
              {{ course.Denumire }}
            </option>
          </datalist>
        </div>
        <div class="form-group col-md-6">
          <label for="text">Voluntar</label> <br />
          <b-form-select
            class="col-md-6"
            v-model="form.Voluntar"
            :options="options"
          ></b-form-select>
        </div>
      </div>
      <div class="form-group col-md-6">
        <br />
        <button class="btn btn-primary btn-send" v-on:click="restetInput">
          Trimite
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        Nume: "",
        Prenume: "",
        CNP: "",
        Nr_Tel: "",
        Email: "",
        StradaSiNumar: "",
        Oras: "",
        Judet: "",
        Tara: "",
        Cod_Curs: "",
        Voluntar: false
      },
      options: [
        { value: "true", text: "Adevarat" },
        { value: "false", text: "Fals" }
      ]
    };
  },

  computed: {
    ...mapGetters("courses", ["getAllCourses", "courseLoadingState"])
  },
  mounted() {
    this.fetchAllCourses();
    console.log(this.getAllCourses);
  },
  methods: {
    ...mapActions("courses", ["fetchAllCourses"]),
    ...mapActions("coursants", ["addCoursant"]),
    restetInput() {
      this.addCoursant(this.form);
      this.form._id = "";
      this.form.Nume = "";
      this.form.Autor = "";
      this.form.Prenume = "";
      this.form.CNP = "";
      this.form.Nr_Tel = "";
      this.form.Email = "";
      this.form.StradaSiNumar = "";
      this.form.Oras = "";
      this.form.Judet = "";
      this.form.Tara = "";
      this.form.Cod_Curs = "";
      this.form.Voluntar = "";
    }
  }
};
</script>
