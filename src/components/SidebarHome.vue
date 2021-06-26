<template>
  <div>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-books' }"
          >Lista Carti</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>{{
          countCarti()
        }}</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-authors' }"
          >Lista Autori</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>
          {{ authorsCount }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-courses' }"
          >Lista Cursuri</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>{{
          countEdituri()
        }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Autori: [],
      Carti: [],
      Edituri: [],
      authorsCount: 0,
    };
  },
  computed: {
    ...mapGetters("authorCount", ["getAuthorCount", "authorLoadingState"]),
  },
  mounted() {
    this.authorsCount = this.$store.getters.getAuthorCount;
    axios
      .get("http://localhost:4000/api/autori/get")
      .then((resp) => {
        this.Autori = resp.data;
        console.log(resp);
      })
      .catch((err) => {
        console.err(err);
      });
    axios
      .get("http://localhost:4000/api/carti/get")
      .then((resp) => {
        this.Carti = resp.data;
        console.log(resp);
      })
      .catch((err) => {
        console.err(err);
      });
    axios
      .get("http://localhost:4000/api/edituri/get")
      .then((resp) => {
        this.Edituri = resp.data;
        console.log(resp);
      })
      .catch((err) => {
        console.err(err);
      });
  },
  methods: {
    countAutori() {
      var countAutor = 0;
      for (var i = 0; i < this.Autori.length; ++i) {
        countAutor++;
      }
      return countAutor;
    },
    countCarti() {
      var Carticount = 0;
      for (var i = 0; i < this.Carti.length; ++i) {
        Carticount++;
      }
      return Carticount;
    },
    countEdituri() {
      var Edituricount = 0;
      for (var i = 0; i < this.Edituri.length; ++i) {
        Edituricount++;
      }
      return Edituricount;
    },
  },
};
</script>
<style scoped>
.badgecustom {
  position: absolute;
  right: 1rem;
  width: 2rem;

  top: 1.1rem;
}
</style>
