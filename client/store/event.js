export const state = () => ({
    loading: false,
    events:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    events(state, payload) {
        state.events = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    events: state => {
        return state.events
    },
}