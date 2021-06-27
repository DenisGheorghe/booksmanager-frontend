<template>
  <b-container>
    <!-- page title -->
    <b-row class="title-row">
      <h1>Biblioteca</h1>
    </b-row>

    <!-- page-content -->
    <b-row>
      <b-col cols="3">
        <SidebarHome></SidebarHome>
      </b-col>
      <b-col cols="9">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarHome from "../components/SidebarHome.vue";
import TableBooks from "../components/TableBooks.vue";
export default {
  components: { SidebarHome, TableBooks },
  data() {
    return {};
  },
};
</script>


<style scoped>
.title-row {
  min-height: 100px;
}

/* .bg-light {
  background: black;
}
.mod {
  background: #0000;
}

li.fav {
  background: #499ce9;
  color: white;
}
img {
  height: 50px;
}

p,
h3,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  background: #fff;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pb-2 {
  padding: 20px;
} */
</style>

    <!-- <div v-if=showBooks>
     
        <br>
        <ul>
        <li v-for="book in filteredBooks " :class="{fav:book.isfav}" @click="toggleFav(book) " :key="book.id"  >
            <img :src="book.img" :alt="book.title">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </li>
     </ul>
     <br>
     <br>
     <input type="text" ref="name">
     <button @click="handleClick">Click here</button> -->