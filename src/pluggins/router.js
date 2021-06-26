import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/home';
import ContactsPage from '../pages/contact';
import RegisterPage from '../components/register';
import TableBooks from '../components/TableBooks';
import TableAuthors from '../components/TableAuthors';
import TableCourses from '../components/TableCourses';
//import { component } from 'vue/types/umd';
import CreateAuthor from '../components/CreateAuthor';
import CreateBook from '../components/CreateBook';
Vue.use(VueRouter)
const routes = [
  {
    path: '/home', component: HomePage, children: [
      { path: 'table-books', name: 'table-books', component: TableBooks },
      { path: 'table-authors', name: 'table-authors', component: TableAuthors },
      { path: 'table-couses', name: 'table-courses', component: TableCourses }
    ]
  },
  { path: '/contact', component: ContactsPage },
  { path: '/register', component: RegisterPage },
  { path: '/create_autor', name: 'create_author', component: CreateAuthor },
  { path: '/create_book', component: CreateBook },
  { path: '**', redirect: '/home' },

]

const router = new VueRouter({
  routes // short for `routes: routes`

})
export default router;