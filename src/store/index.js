import Vuex from 'vuex';
import Vue from 'vue';

import authorsModule from './autori.module';
import booksModule from './carti.module';
import publisherModule from './publishers.module';
import CoursesModule from './courses.module';
import CoursantsModule from './coursants.module';
import EmployeesModule from './employees.module';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        authors: authorsModule,
        books: booksModule,
        publishers: publisherModule,
        courses: CoursesModule,
        coursants: CoursantsModule,
        employees: EmployeesModule,
    }
})


// export default new Vuex.Store({
//     state: {
//         autori: []
//     },
//     mutations: {
//         SET_AUTORI(state, autori) {
//             state.autori = autori;
//         }
//     },
//     actions: {
//         async getAutori({ commit }) {
//             axios.get("http://localhost:4000/api/carti/get").then((resp) => {
//                 commit('SET_AUTORI', response.data);
//                 console.log(resp);
//             });
//         },
//     },
//     modules: {

//     }
// })