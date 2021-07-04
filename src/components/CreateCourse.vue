
<template>
  <div>
    <h2>Add a New Course</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="Denumire">Nume</label>
          <input
            type="text"
            class="form-control"
            id="Denumire"
            placeholder="Nume"
            v-model="form.Denumire"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="Limba">Limba Cursului</label>
          <input
            type="text"
            class="form-control"
            id="Limba"
            placeholder="Limba Cursului"
            v-model="form.Limba"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Tipul Cursului</label> <br />
          <b-form-select v-model="form.Tip" :options="options"></b-form-select>
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
        Denumire: "",
        Limba: "",
        Tip: "",
      },
      options: [
        { value: "Online", text: "Online" },
        { value: "Fizic", text: "Fizic" },
      ],
    };
  },
  methods: {
    ...mapActions("courses", ["addCourse"]),
    submitForm() {},
    restetInput() {
      this.addCourse(this.form);

      this.form.Denumire = "";
      this.form.Limba = "";
      this.form.Tip = "";
    },
  },
};
</script>