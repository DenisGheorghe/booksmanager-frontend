// Course state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    coursesList: [
    ],
    courseCount: 1,
    isLoading: false,
}

const getters = {
    getAllCourses(state) {
        return state.coursesList;

    },
    courseLoadingState(state) {
        return state.isLoading;
    },
    getCourseCount(state) {
        return state.courseCount;
    }
}

const actions = {
    fetchAllCourses({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/cursuri/get")
            .then((resp) => {
                const coursesList = resp.data;

                commit('UPDATE_STATE', coursesList)
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
    }
}

const mutations = {
    UPDATE_STATE(state, coursesList) {
        Vue.set(state, 'coursesList', coursesList);
        Vue.set(state, 'courseCount', coursesList.length);
    },
    ADD_COURSE(state, course) {
        Vue.set(state, 'coursesList', [...state.coursesList, course]);
        Vue.set(state, 'courseCount', state.coursesList.length);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}