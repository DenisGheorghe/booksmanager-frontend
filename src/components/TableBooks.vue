<template>
  <div>
   <!-- <b-table striped hover :items="items"></b-table> -->
   <b-col lg="4" class="pb-2"><b-button>Add book</b-button></b-col>
     <b-table id= "my-table" striped hover :items="list" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
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
export default {
  data() {
    return {
      fields: ['ISBN', 'Denumire_Carte', {key:'Autor.Nume_Autor', label:'Nume Autor'}, {key:'Autor.Prenume_Autor', label:'Prenume Autor'}, 'Domeniu', 'Stoc', 'Cod_Editura'],
      list:undefined,
      perPage:15,
      currentPage:1
    };
    
    
  },
  computed:{
      rows(){
        try{
      return this.list.length
        }
        catch(e){
          
        }
      },
    }
  ,
  mounted() {
    axios.get("http://localhost:4000/api/carti/get").then((resp) => {
      this.list=resp.data;
      console.log(resp);
    });
  },
  
};

</script>

<style>
 #abc{
    margin: auto;
  width: 50%;
  padding: 10px;
  max-width: 50%!important;
} 
</style>