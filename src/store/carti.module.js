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
    },
    getCartiCount(state) {
        return state.cartiCount;
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
    },
    deleteBook({ commit }, idBook) {
        //delete book from server
        Vue.set(state, 'isLoading', true);
        axios.delete('http://localhost:4000/api/carti/delete/', { _id: idBook })
            .then(() => {
                commit('DELETE_BOOK', idBook)
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
    },
    DELETE_BOOK(state, idBook) {
        const index = state.booksList.findIndex((book) => book._id == idBook)
        if (index != -1) {
            state.booksList.splice(index, 1)
            Vue.set(state, 'booksList', state.booksList);
            Vue.set(state, 'cartiCount', state.booksList.length);
        }
        else {
            console.log(`Cartea cu id-ul ${idBook} nu a fost gasita`)
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