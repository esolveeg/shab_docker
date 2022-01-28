export const state = () => ({
    loading: false,
    articles:[],
    projects:[],
    events:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    articles(state, payload) {
        state.articles = payload;
    },
    projects(state, payload) {
        state.projects = payload;
    },
    events(state, payload) {
        state.events = payload;
    },
    
};

export const getters = {
    loading: state => {
        return state.loading
    },
    articles: state => {
        return state.articles
    },
    projects: state => {
        return state.projects
    },
    events: state => {
        return state.events
    },
}