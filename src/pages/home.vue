<template>
    <div class="mod">
        <h1>This is the homepage</h1>
        <div v-if=showBooks>
     
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
     <button @click="handleClick">Click here</button>
    </div>
 </div>
</template>
<script>

export default {

    data(){
       
        return{
          
            showBooks:true,
            books: [
                { title: "first book title", author: 'first author', img: '././src/assets/logo.png', isfav: true},
                { title: "second book title", author: 'second author', img: "././src/assets/logo.png", isfav: true},
                { title: "third book title", author: 'third author', img: '././src/assets/logo.png', isfav: false},
            ],
            url: 'https://www.google.com',
            title: "Call of Cthulhu"

        }
    },
    methods:{
        toggleFav(book){
            book.isfav=!book.isfav
        },
      handleClick(){
          this.$refs.name.classList.add('active'),
          this.$refs.name.focus()
      },

    },

  
    computed:{
        filteredBooks(){
            return this.books.filter( (book) => book.isfav)
        }
    }

}
</script>
<style scoped>
.bg-light{
    background: black;
}
.mod{
    background: #0000;
}

li.fav{
    background: #499ce9;
    color: white;
}
img{
    height: 50px;
}

p, h3, ul{
 margin: 0;
 padding: 0;   
}
li{
    list-style-type: none;
    background: #fff;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>