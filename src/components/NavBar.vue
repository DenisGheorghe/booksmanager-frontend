<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item
          ><router-link active-class="active" to="/home"
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

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>