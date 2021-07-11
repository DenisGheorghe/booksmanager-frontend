<template>
  <div>
    <h2>Adauga un Nou Imprumut</h2>
    <br />
    <form v-on:submit.prevent>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="text">Cursant</label> <br />
          <b-form-input
            v-model="form.Cod_Cursant"
            list="my-list-id_Cursant"
          ></b-form-input>
          <datalist id="my-list-id_Cursant">
            <option
              v-for="Cursant in getAllCoursants"
              :value="Cursant._id"
              :key="Cursant._id"
            >
              {{ Cursant.Nume }} {{ Cursant.Prenume }}
            </option>
          </datalist>
        </div>

        <!-- <div class="form-group col-md-6">
          <label for="text">Curs</label> <br />
          <b-form-input
            v-model="form.Cod_Curs"
            list="my-list-id_Curs"
          ></b-form-input>
          <datalist id="my-list-id_Curs">
            <option
              v-for="course in getAllCourses"
              :value="course._id"
              :key="course._id"
            >
              {{ course.Denumire }}
            </option>
          </datalist>
        </div> -->
        <div class="form-group col-md-6">
          <label for="text">Angajat</label> <br />
          <b-form-input
            v-model="form.Cod_Angajat"
            list="my-list-id_Angajat"
          ></b-form-input>
          <datalist id="my-list-id_Angajat">
            <option
              v-for="employee in getAllEmployees"
              :value="employee._id"
              :key="employee._id"
            >
              {{ employee.Nume }} {{ employee.Prenume }}
            </option>
          </datalist>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="example-datepicker">Data imprumutului</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="form.Data_Imprumut"
              :min="min"
              class="mb-2"
            ></b-form-datepicker>
          </div>
          <div class="form-group col-md-6">
            <label for="example-datepickers">Data returului</label>
            <b-form-datepicker
              id="example-datepickers"
              v-model="form.Data_Retur"
              class="mb-2"
            ></b-form-datepicker>
          </div>
        </div>
        <!-- <div class="form-group col-md-6">
          <label for="text">Numar Exemplare</label>
          <input
            type="text"
            class="form-control"
            id="Stoc"
            placeholder="Numar Exemplare"
            v-model="form.Stoc"
            ref="Stoc"
          />
        </div> -->
      </div>
      <div class="row">
        <div class="form-group col-md-4 offset-md-4 text-center">
          <h1>Carti</h1>
          <div v-for="(listBookBorrow, index) in form.Carti" :key="index">
            <b-form-input
              v-model="listBookBorrow.Cod_Carte"
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
          <button class="btn btn-primary" @click="addFind">Adauga Carte</button>
        </div>
      </div>
      <br />
      <br />
      <div class="form-group col-md-6">
        <button class="btn btn-primary" v-on:click="restetInput">
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
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    return {
      form: {
        Carti: [],
        Cod_Cursant: "",
        Cod_Curs: "",
        Cod_Angajat: "",
        Data_Imprumut: "",
        Data_Retur: "",
      },
      min: minDate,
    };
  },

  computed: {
    ...mapGetters("borrows", ["getAllBorrows", "borrowsLoadingState"]),
    ...mapGetters("coursants", ["getAllCoursants", "coursantsLoadingState"]),
    ...mapGetters("courses", ["getAllCourses", "courseLoadingState"]),
    ...mapGetters("employees", ["getAllEmployees", "employeeLoadingState"]),
    ...mapGetters("books", ["getAllBooks", "bookLoadingState", "calculCarti"]),
  },
  mounted() {
    this.fetchAllCoursants();
    console.log(this.getAllCoursants);
    this.fetchAllCourses();
    console.log(this.getAllCourses);
    this.fetchAllEmployees();
    console.log(this.getAllCourses);
    this.fetchAllBooks();
    console.log(this.getAllBooks);
  },
  methods: {
    ...mapActions("borrows", ["addBorrow"]),
    ...mapActions("coursants", ["fetchAllCoursants"]),
    ...mapActions("courses", ["fetchAllCourses"]),
    ...mapActions("employees", ["fetchAllEmployees"]),
    ...mapActions("books", ["fetchAllBooks", "deleteBook"]),
    addFind: function () {
      this.form.Carti.push({ Cod_Carte: "" });
    },

    submitForm() {},
    restetInput() {
      this.addBorrow(this.form);
      this.form.Carti.Cod_Carte = "";
      this.form.Cod_Angajat = "";
      this.form.Cod_Curs = "";
      this.form.Cod_Cursant = "";
      this.form.Data_Imprumut = "";
      this.form.Data_Retur = "";
    },
  },
};
</script>
