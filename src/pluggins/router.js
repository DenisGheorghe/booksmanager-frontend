import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/home';
import Employees from '../pages/employees';
import CoursesPage from '../pages/courses';
import RegisterPage from '../components/register';
import TableBooks from '../components/TableBooks';
import TableAuthors from '../components/TableAuthors';
import TableCourses from '../components/TableCourses';
import TablePublishers from '../components/TablePublishers';
import TableCoursants from '../components/TableCoursants';
import TableEmployees from '../components/TableEmployees';
//import { component } from 'vue/types/umd';
import CreateAuthor from '../components/CreateAuthor';
import CreateBook from '../components/CreateBook';
import CreatePublisher from '../components/CreatePublisher';
import BooksReports from '../components/ReportBooks';


Vue.use(VueRouter)
const routes = [
  {
    path: '/home', component: HomePage, children: [
      { path: 'table-books', name: 'table-books', component: TableBooks },
      { path: 'table-authors', name: 'table-authors', component: TableAuthors },
      { path: 'table-publishers', name: 'table-publishers', component: TablePublishers },
      { path: '/books-reports', name: 'books-reports', component: BooksReports },
    ]
  },
  {
    path: '/courses', component: CoursesPage, children: [
      { path: '/table-courses', name: 'table-courses', component: TableCourses },
      { path: '/table-coursants', name: 'table-coursants', component: TableCoursants },
    ]
  },
  {
    path: '/employees', component: Employees, children: [
      { path: '/table-employees', name: 'table-employees', component: TableEmployees },
    ]
  },
  { path: '/register', component: RegisterPage },

  { path: '/create_autor', name: 'create_author', component: CreateAuthor },
  { path: '/create_book', component: CreateBook },
  { path: '/create_publisher', component: CreatePublisher },
  { path: '/table-publishers', component: TablePublishers },
  { path: '**', redirect: '/home' },
]

const router = new VueRouter({
  routes // short for `routes: routes`

})
export default router;