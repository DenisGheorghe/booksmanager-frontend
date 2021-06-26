//Books state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    booksList: [
    ],
    cartiCount: 0,
    isLoading: false,
}

const getters = {
    getAllBooks(state) {
        return state.booksList;
    },
    bookLoadingState(state) {
        return state.isLoading;
    }
}

const actions = {
    fetchAllBooks({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/carti/get")
            .then((resp) => {
                const booksList = resp.data;

                commit('UPDATE_STATE', booksList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    addBook({ commit }, newBook) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/carti/create", newBook)
            .then(resp => {
                const bookToAdd = resp.data;
                commit('ADD_BOOK', bookToAdd)
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
    UPDATE_STATE(state, booksList) {
        Vue.set(state, 'booksList', booksList);
        Vue.set(state, 'cartiCount', booksList.length);
    },
    ADD_BOOK(state, carti) {
        Vue.set(state, 'booksList', [...state.booksList, carti]);
        Vue.set(state, 'cartiCount', state.booksList.length);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}