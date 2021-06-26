import axios from 'axios';
import Vue from 'vue';

const state = {
    publisherList: [
    ],
    publisherCount: 0,
    isLoading: false,
}

const getters = {
    getAllPublishers(state) {
        return state.publisherList;

    },
    publisherLoadingState(state) {
        return state.isLoading;
    }

}
const actions = {
    fetchAllPublishers({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/edituri/get")
            .then((resp) => {
                const publisherList = resp.data;

                commit('UPDATE_STATE', publisherList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    addPublisher({ commit }, newAuthor) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/edituri/create", newAuthor)
            .then(resp => {
                const publisherToAdd = resp.data;
                commit('ADD_PUBLISHER', publisherToAdd)
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
    UPDATE_STATE(state, publisherList) {
        Vue.set(state, 'publisherList', publisherList);
        Vue.set(state, 'publisherCount', publisherList.length);
    },
    ADD_AUTHOR(state, author) {
        Vue.set(state, 'publisherList', [...state.publisherList, author]);
        Vue.set(state, 'publisherCount', state.publisherList.length);
    }
}