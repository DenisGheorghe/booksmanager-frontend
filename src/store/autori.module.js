// Author state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    authorList: [
    ],
    authorCount: 1,
    isLoading: false,
}

const getters = {
    getAllAuthors(state) {
        return state.authorList;

    },
    authorLoadingState(state) {
        return state.isLoading;
    },
    getAuthorCount(state) {
        return state.authorCount;
    }
}

const actions = {
    fetchAllAuthors({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/autori/get")
            .then((resp) => {
                const authorList = resp.data;

                commit('UPDATE_STATE', authorList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    addAuthor({ commit }, newAuthor) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/autori/create", newAuthor)
            .then(resp => {
                const authorToAdd = resp.data;
                commit('ADD_AUTHOR', authorToAdd)
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
    UPDATE_STATE(state, authorList) {
        Vue.set(state, 'authorList', authorList);
        Vue.set(state, 'authorCount', authorList.length);
    },
    ADD_AUTHOR(state, author) {
        Vue.set(state, 'authorList', [...state.authorList, author]);
        Vue.set(state, 'authorCount', state.authorList.length);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}