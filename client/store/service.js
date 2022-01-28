export const state = () => ({
    loading: false,
    services:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    services(state, payload) {
        state.services = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    services: state => {
        return state.services
    },
}