// Author state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    courseList: [],
    couseCount: 0,
    isLoading: false,
}

const getters = {
    getAllCourses(state) {
        return state.courseList;
    },
    couseLoadingState(state) {
        return state.isLoading;
    },
    getCoursesCount(state) {
        return state.couseCount;
    }
}

const actions = {
    fetchAllCourses({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/cursuri/get")
            .then((resp) => {
                const courseList = resp.data;

                commit('UPDATE_STATE', courseList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    addCourse({ commit }, newCourse) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/cursuri/create", newCourse)
            .then(resp => {
                const couseToAdd = resp.data;
                commit('ADD_COURSE', couseToAdd)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    deleteCourse({ commit }, idCourse) {
        //delete course from server
        Vue.set(state, 'isLoading', true);
        axios.delete('http://localhost:4000/api/cursuri/delete/', {
            data: {
                _id: idCourse
            }
        })
            .then(() => {
                commit('DELETE_COURSE', idCourse)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    }
}




const mutations = {
    UPDATE_STATE(state, courseList) {
        Vue.set(state, 'courseList', courseList);
        Vue.set(state, 'couseCount', courseList.length);
    },
    ADD_COURSE(state, course) {
        Vue.set(state, 'courseList', [...state.courseList, course]);
        Vue.set(state, 'couseCount', state.courseList.length);
    },
    DELETE_COURSE(state, idCourse) {
        const index = state.courseList.findIndex((course) => course._id == idCourse)
        if (index != -1) {
            state.courseList.splice(index, 1)
            Vue.set(state, 'courseList', state.courseList);
            Vue.set(state, 'couseCount', state.courseList.length);
        }
        else {
            console.log(`Cartea cu id-ul ${idCourse} nu a fost gasita`)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}