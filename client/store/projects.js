export const state = () => ({
    loading: false,
    editId:null,
    projects:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    editId(state, payload) {
        state.editId = payload;
    },
    projects(state, payload) {
        state.projects = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    editId: state => {
        return state.editId
    },
    projects: state => {
        return state.projects
    },
}