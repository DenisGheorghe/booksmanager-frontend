// Employee state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    employeeList: [
    ],
    emplyeeCount: 0,
    isLoading: false,
}

const getters = {
    getAllEmployees(state) {
        return state.employeeList;

    },
    employeeLoadingState(state) {
        return state.isLoading;
    },
    getEmployeeCount(state) {
        return state.emplyeeCount;
    }
}

const actions = {
    fetchAllEmployees({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/angajati/get")
            .then((resp) => {
                const employeeList = resp.data;

                commit('UPDATE_STATE', employeeList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    addEmployee({ commit }, newAuthor) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/angajati/create", newAuthor)
            .then(resp => {
                const authorToAdd = resp.data;
                commit('ADD_EMPLOYEE', authorToAdd)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    deleteEmployee({ commit }, idEmployee) {
        //delete employee from server
        Vue.set(state, 'isLoading', true);
        axios.delete('http://localhost:4000/api/angajati/delete/', {
            data: {
                _id: idEmployee
            }
        })
            .then(() => {
                commit('DELETE_EMPLOYEE', idEmployee)
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
    UPDATE_STATE(state, employeeList) {
        Vue.set(state, 'employeeList', employeeList);
        Vue.set(state, 'emplyeeCount', employeeList.length);
    },
    ADD_EMPLOYEE(state, employee) {
        Vue.set(state, 'employeeList', [...state.employeeList, employee]);
        Vue.set(state, 'emplyeeCount', state.employeeList.length);
    },
    DELETE_EMPLOYEE(state, idEmployee) {
        const index = state.employeeList.findIndex((employee) => employee._id == idEmployee)
        if (index != -1) {
            state.employeeList.splice(index, 1)
            Vue.set(state, 'employeeList', state.employeeList);
            Vue.set(state, 'emplyeeCount', state.employeeList.length);
        }
        else {
            console.log(`Cartea cu id-ul ${idEmployee} nu a fost gasita`)
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