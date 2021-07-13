<template>
  <div class="nmod">
    <b-container class="bv-example-row nmod" fluid="xl">
      <b-nav type="dark" variant="dark" class="navMod" justified="true">
        <b-nav-item
          ><router-link active-class="active" to="/home" class="round"
            >Biblioteca</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/courses">Cursuri</router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/employees">Angajati</router-link></b-nav-item
        >
        <!-- Navbar dropdowns -->
      </b-nav>
    </b-container>
  </div>
</template>
<style scoped>
.navMod {
  background-color: #212529 !important;
  color: white;
  padding-bottom: 1%;
}
.round {
  border: 2px;
  border-radius: 25px;
}
</style>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  border: 2px;
  border-radius: 7px;
  /* -ms-transform: translate(100%);
  transform: translate(100%);
  max-width: 100px; */
}
/* #395964 */
a:hover {
  background-color: #0b97c4;
}
.nmod {
  background-color: #212529;
}
</style>