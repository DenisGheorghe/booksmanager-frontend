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
          getCartiCount
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
          {{ getAuthorCount }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-publishers' }"
          >Lista Edituri</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>
          {{ getPublisherCount }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'table-publishers' }"
          >Imprumuturi</router-link
        >
        <b-badge variant="badge bg-primary rounded-pill" pill>
          {{ getPublisherCount }}
        </b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <router-link
          class="nav-link"
          exact-active-class="active"
          :to="{ name: 'books-reports' }"
          >Rapoarte</router-link
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
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
    ...mapGetters("authors", ["getAuthorCount", "authorLoadingState"]),
    ...mapGetters("books", ["getCartiCount"]),
    ...mapGetters("authors", ["getauthorCount"]),
    ...mapGetters("publishers", ["getPublisherCount"]),
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
