import vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/home';
import ContactsPage from '../pages/contact';
//import { component } from 'vue/types/umd';

const routes =   [
    { path: '/home', component: HomePage },
    { path: '/contact', component: ContactsPage }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`

  })
  export default router;