<template>
  <div>
    <div class="row">
      <b-col lg="4" class="pb-2"
        ><b-button @click="toggleSearchDate"
          >Raport dupa Data Returului</b-button
        >
        <form v-on:submit.prevent v-if="showSearchLanguage">
          <label for="example-datepicker">Intre</label>
          <b-form-datepicker
            id="example-datepicker"
            v-model="dateStart"
            class="mb-2"
          ></b-form-datepicker>

          <label for="example-datepickers">Si</label>
          <b-form-datepicker
            id="example-datepickers"
            v-model="dateEnd"
            class="mb-2"
          ></b-form-datepicker>

          <button class="btn btn-primary" v-on:click="submitFormLang">
            Submit
          </button>
          <br />
          <br />
        </form>
      </b-col>

      <b-col class="form-group col-md-6">
        <b-button @click="toggleSearchCoursant">Raport dupa Cursant</b-button>
        <form v-on:submit.prevent v-if="showSearchCoursant">
          <div class="form-group col-md-6">
            <label for="text">Nume Cursant</label> <br />
            <b-form-input
              v-model="Cod_Cursant"
              list="my-list-ids"
              placeholder="Nume Cursant"
            ></b-form-input>
            <datalist id="my-list-ids">
              <option
                v-for="Coursant in getAllCoursants"
                :value="Coursant._id"
                :key="Coursant._id"
              >
                {{ Coursant.Nume }} {{ Coursant.Prenume }}
              </option>
            </datalist>
          </div>
          <button class="btn btn-primary" v-on:click="submitFormCoursant">
            Trimite
          </button>
          <br />
          <br />
        </form>
      </b-col>

      <form v-on:submit.prevent v-if="showSearchCourse">
        <b-col lg="4" class="pb-2"
          ><b-button @click="toggleSearchAuthor">Raport dupa Curs</b-button>
          <div v-on:submit.prevent v-if="showSearchCourse">
            <label for="text">Curs</label> <br />
            <b-form-input
              v-model="form.Cod_Curs"
              list="my-list-ids"
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
            <button class="btn btn-primary" v-on:click="submitFormAuth">
              Trimite
            </button>
          </div>
        </b-col>
      </form>
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
      <template #cell(Carti)="data">
        <span v-for="carte in data.item.Carti" :key="carte._id">
          {{ carte.Cod_Carte.Denumire_Carte }} <br />
        </span>
      </template>
      <template #cell(Returnat1)="data">
        <b-button
          v-if="data.item.Returnat"
          size="sm"
          v-on:click="setFalse(data.item._id)"
          class="mr-1"
          variant="secondary"
        >
          Returnat
        </b-button>
        <b-button
          v-else
          size="sm"
          v-on:click="setTrue(data.item._id)"
          class="mr-1"
          variant="success"
        >
          Returnare
        </b-button>
      </template>
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
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      dateStart: "",
      dateEnd: "",
      Cod_Curs: "",
      Cod_Cursant: "",
      lista: [],
      fields: [
        { key: "Cod_Cursant.Nume", label: "Nume Cursant" },
        { key: "Cod_Cursant.Prenume", label: "Prenume Cursant" },
        // { key: "Cod_Cursant.Cod_curs", label: "Curs" },
        {
          key: "Data_Imprumut",
          label: "Data Imprumut",
          formatter: "formatDateAssigned",
        },
        {
          key: "Data_Retur",
          label: "Data Retur",
          formatter: "formatDateAssigned",
        },
        {
          key: "Carti",
          label: "Carti Imprumutate",
        },
        {
          key: "Returnat1",
          label: "Actiuni",
        },
      ],
      showSearchLanguage: false,
      showSearchCourse: false,
      showSearchCoursant: false,
      perPage: 15,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters("courses", ["getAllCourses", "courseLoadingState"]),
    ...mapGetters("coursants", ["getAllCoursants", "coursantsLoadingState"]),
  },
  mounted() {
    this.fetchAllCourses();
    this.fetchAllCoursants();
  },
  methods: {
    ...mapActions("coursants", ["fetchAllCoursants"]),
    ...mapActions("courses", ["fetchAllCourses"]),
    ...mapActions("borrows", ["updateBorrow"]),
    formatDateAssigned(value) {
      return moment(value).format("DD.MM.YYYY");
    },
    submitFormLang() {
      console.log(this.reportLanguage);
      axios
        .get(
          `http://localhost:4000/api/fise_imprumut/get/between/${this.dateStart}/and/${this.dateEnd}`
        )
        .then((resp) => {
          (this.lista = []), console.warn(this.abc);
          console.warn(resp.data);
          this.lista = resp.data;
        });
    },
    submitFormAuth() {
      console.log(this.report);
      axios
        .get(
          `http://localhost:4000/api/carti/get/get/curs/${this.reportCourse}`
        )
        .then((resp) => {
          (this.lista = []), console.warn(this.abc);
          console.warn(resp.data);
          this.lista = resp.data;
        });
      this.reportLanguage = "";
      this.reportCourse = "";
    },
    submitFormCoursant() {
      axios
        .get(
          `http://localhost:4000/api/fise_imprumut/get/cursant/${this.Cod_Cursant}`
        )
        .then((resp) => {
          (this.lista = []), console.warn(this.abc);
          console.warn(resp.data);
          this.lista = resp.data;
        });
      this.Cod_Cursant = "";
    },
    toggleSearchDate() {
      this.showSearchLanguage = !this.showSearchLanguage;
    },
    toggleSearchAuthor() {
      this.showSearchCourse = !this.showSearchCourse;
    },
    toggleSearchCoursant() {
      this.showSearchCoursant = !this.showSearchCoursant;
    },
    setTrue(id) {
      this.updateBorrow({
        id,
        Returnat: true,
      });
    },
    setFalse(id) {
      this.updateBorrow({
        id,
        Returnat: false,
      });
    },
  },
};
</script>