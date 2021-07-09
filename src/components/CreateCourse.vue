
<template>
  <div>
    <h2>Add a New Course</h2>
    <form v-on:submit.prevent>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="Denumire">Denumire</label>
          <input
            type="text"
            class="form-control"
            id="Denumire"
            placeholder="Denumire Curs"
            ref="Denumire"
            v-model="form.Denumire"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Limba Cursului</label>
          <input
            type="text"
            class="form-control"
            id="Limba"
            placeholder="Limba"
            ref="Limba"
            v-model="form.Limba"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="text">Tipul Cursului</label> <br />
          <b-form-select v-model="form.Tip" :options="options"></b-form-select>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" v-on:click="restetInput">
          Trimite
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        Denumire: "",
        Limba: "",
        Tip: "",
      },
      options: ["Online", "Fizic"],
    };
  },
  methods: {
    ...mapActions("courses", ["addCourse"]),
    restetInput() {
      this.addCourse(this.form);
      this.form.Denumire = "";
      this.form.Limba = "";
      this.form.Tip = "";
    },
  },
};
</script>