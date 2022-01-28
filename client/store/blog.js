export const state = () => ({
    loading: false,
    articles:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    articles(state, payload) {
        state.articles = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    articles: state => {
        return state.articles
    },
}