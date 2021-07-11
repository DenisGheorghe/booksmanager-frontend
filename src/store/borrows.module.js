//Books state module
import axios from 'axios';
import Vue from 'vue';

const state = {
    borrowList: [],
    borrowCount: 0,
    isLoading: false,
}

const getters = {
    getAllBorrows(state) {

        return state.borrowList.flat();

    },
    borrowsLoadingState(state) {
        return state.isLoading;
    },
    getBorrowsCount(state) {
        return state.borrowCount;
    },
    getAllBorrowstTrue(state) {

        let result = state.borrowList.filter(state => !state.Returnat);
        return result;
    },
    // getAllBooksLang(state) {
    //     return state.querryBooksByLanguage;
    // }

}

const actions = {
    fetchAllBorrows({ commit, state }) {
        Vue.set(state, 'isLoading', true);
        axios
            .get("http://localhost:4000/api/fise_imprumut/get")
            .then((resp) => {
                const borrowList = resp.data;

                commit('UPDATE_STATE', borrowList)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    addBorrow({ commit }, newBorrow) {
        Vue.set(state, 'isLoading', true);
        axios
            .post("http://localhost:4000/api/fise_imprumut/create", newBorrow)
            .then(resp => {
                const borrowToAdd = resp.data;
                commit('ADD_BORROW', borrowToAdd)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },

    deleteBorrow({ commit }, idBorrow) {
        //delete borrow from server
        Vue.set(state, 'isLoading', true);

        axios.delete('http://localhost:4000/api/fise_imprumut/delete/', {
            data: {
                _id: idBorrow
            }
        })
            .then(() => {
                commit('DELETE_BORROW', idBorrow)
            })
            .catch(err => {
                console.log('Error has occured', err);
            })
            .finally(() => {
                Vue.set(state, 'isLoading', false);
            })
    },
    updateBorrow({ commit }, newBorrow) {
        //delete borrow from server
        Vue.set(state, 'isLoading', true);

        axios.put('http://localhost:4000/api/fise_imprumut/update', {
            data: {
                ...newBorrow,
            }
        })
            .then((resp) => {
                commit('UPDATE_BORROW', resp.data)
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
    UPDATE_STATE(state, borrowList) {
        Vue.set(state, 'borrowList', borrowList);
        Vue.set(state, 'borrowCount', borrowList.length);
    },
    ADD_BORROW(state, carti) {
        Vue.set(state, 'borrowList', [...state.borrowList, carti]);
        Vue.set(state, 'borrowCount', state.borrowList.length);
    },
    DELETE_BORROW(state, idBorrow) {
        const index = state.borrowList.findIndex((borrow) => borrow._id == idBorrow)
        console.warn(`DELETE_BORROW Sore index: ${index} idBorrow: ${idBorrow}`)
        if (index != -1) {
            state.borrowList.splice(index, 1)
            Vue.set(state, 'borrowList', state.borrowList);
            Vue.set(state, 'borrowCount', state.borrowList.length);
        }
        else {
            console.log(`Cartea cu id-ul ${idBorrow} nu a fost gasita`)
        }
    },
    UPDATE_BORROW(state, newBorrow) {
        console.error(newBorrow)
        const newState = state.borrowList.map((borrow) => {
            console.log(borrow._id === newBorrow._id)
            return borrow._id === newBorrow._id
                ? newBorrow
                : borrow
        }
        );

        Vue.set(state, 'borrowList', newState);
    }
    // QUERRY_LANGUAGE(state, bookLanguageList) {
    //     Vue.set(state, 'bookLanguageList', state.querryBooksLanguage);
    //     Vue.set(state, 'querryBooksTotalLanguage', bookLanguageList.length);
    // },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}