// Course state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    coursantsList: [
    ],
    coursantsCount: 1,
    isLoading: false,
}

const getters = {
    getAllCoursants(state) {
        return state.coursantsList;

    },
    coursantsLoadingState(state) {
        return state.isLoading;
    },
    getCoursantsCount(state) {
        return state.coursantsCount;
    },

}

const actions = {
    fetchAllCoursants({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/cursanti/get")
            .then((resp) => {
                const coursantsList = resp.data;

                commit('UPDATE_STATE', coursantsList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    addCoursant({ commit }, newCoursant) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/cursanti/create", newCoursant)
            .then(resp => {
                const coursantToAdd = resp.data;
                commit('ADD_COURSANT', coursantToAdd)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    deleteCoursant({ commit }, idBook) {
        //delete book from server
        Vue.set(state, 'isLoading', true);



        axios.delete('http://localhost:4000/api/cursanti/delete/', {
            data: {
                _id: idBook
            }
        })
            .then(() => {
                commit('DELETE_COURSANT', idBook)
                console.warn(`Warn din store then ${idBook}`);
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    updateCoursant({ commit }, coursantUpdate) {
        //delete book from server
        Vue.set(state, 'isLoading', true);

        axios.put('http://localhost:4000/api/cursanti/update', {
            data: {
                ...coursantUpdate,
            }
        })
            .then((resp) => {
                console.warn("coursantUpdate")
                commit('UPDATE_COURSANT', resp.data)
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
    UPDATE_STATE(state, coursantsList) {
        Vue.set(state, 'coursantsList', coursantsList);
        Vue.set(state, 'coursantsCount', coursantsList.length);
    },
    ADD_COURSANT(state, course) {
        Vue.set(state, 'coursantsList', [...state.coursantsList, course]);
        Vue.set(state, 'coursantsCount', state.coursantsList.length);
    },
    DELETE_COURSANT(state, idBook) {
        const index = state.coursantsList.findIndex((book) => book._id == idBook)
        console.warn(`DELETE_COURSANT Sore index: ${index} idBook: ${idBook}`)
        if (index != -1) {
            state.coursantsList.splice(index, 1)
            Vue.set(state, 'coursantsList', state.coursantsList);
            Vue.set(state, 'cartiCount', state.coursantsList.length);
        }
        else {
            console.log(`Cartea cu id-ul ${idBook} nu a fost gasita`)
        }
    },


    UPDATE_COURSANT(state, coursantUpdate) {
        console.error(coursantUpdate)
        const newState = state.coursantsList.map((coursant) => {
            console.log(coursant._id === coursantUpdate._id)
            return coursant._id === coursantUpdate._id
                ? coursantUpdate
                : coursant
        }
        );
        Vue.set(state, 'coursantsList', newState);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}