<template>
  <div>
   <!-- <b-table striped hover :items="items"></b-table> -->
    <b-col lg="4" class="pb-2"><b-button @click="toggleCreateAuthor">Add Author</b-button></b-col>
      <CreateAuthor v-if="showCreateAuthor"></CreateAuthor>
     <b-table id= "my-table" striped hover :items="list" :fields="fields" :per-page="perPage" :current-page="currentPage" ></b-table>
       <b-pagination
      v-model="currentPage"
      :total-rows="rows"
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
import Vue from "vue";
import axios from "axios";
import CreateAuthor from "./CreateAuthor.vue";
export default {
  data() {
    return {
      fields: ["Nume_Autor", "Prenume_Autor"],
      list: undefined,
      perPage: 15,
      currentPage: 1,
      showCreateAuthor: false,
    };
  },
  components: {
    CreateAuthor,
  },

  computed: {
    rows() {
      try {
        return this.list.length;
      } catch (e) {}
    },
  },
  mounted() {
    axios.get("http://localhost:4000/api/autori/get").then((resp) => {
      this.list = resp.data;
      console.log(resp);
    });
  },
  methods: {
    toggleCreateAuthor() {
      this.showCreateAuthor = !this.showCreateAuthor;
    },
  },
};
</script>

<style>
#abc {
  margin: auto;
  width: 50%;
  padding: 10px;
  max-width: 50% !important;
}
</style>