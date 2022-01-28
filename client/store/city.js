export const state = () => ({
    loading: false,
    cities:[],
   
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    cities(state, payload) {
        state.cities = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    cities: state => {
        return state.cities
    }
}