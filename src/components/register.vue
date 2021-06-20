<template>
    <div>
        <h1>Register</h1>
        <input type="email"  name="email" v-model="email" placeholder="email" />
        
        <br />
        <input type="password" name="password" v-model="password" placeholder="password">
        <br/>
        
        <button @click ="register">Register</button>
    </div>
</template>
<script>
import auth from '../services/auth' 
import 'regenerator-runtime';
export default {
    data(){
        return{
            email:  'abc',
            password: 'acb'
            
        }
    },
        watch: {
            email(value){
        console.log('email has been changed')
            }
    } ,
    mounted() {
        setTimeout(() =>{
            this.email = 'hello world'
        }, 2000)
    },
    methods: {
        // async register(){
        //    const response = await auth.register({
        //        email: this.email,
        //        password: this.password
        //    })
        //    console.log(response.data)
        // }
    },


}
</script>
<style scoped>

</style>