
<template>
  <div>
    <h2>Add a New Author</h2>
    <form v-on:submit.prevent="submitForm">
      <!-- <div class="form-group">
        <label for="Nume_Autor">Nume</label>
        <input
          type="text"
          class="form-control"
          id="_id"
          placeholder="id"
          v-model="form._id"
        />
      </div> -->
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
        <button class="btn btn-primary" v-on:click="restetInput">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        //  _id: "",
        Nume_Autor: "",
        Prenume_Autor: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:4000/api/autori/create", this.form)
        .then((res) => {
          //Perform Success Action
        })
        .catch((error) => {
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
        
    },
    restetInput(){
       this.$refs["Nume"].value = "";
        this.$refs["Prenume"].value = "";
    },

    mounted() {
      axios
        .get("http://localhost:4000/api/autori/get")
        .then((resp) => {
          this.Autori = resp.data;
          console.log(resp);
        })
        .catch((err) => {
          console.err(err);
        });
    },
  },
};
</script>