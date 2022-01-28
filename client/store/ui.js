export const state = () => ({
    loginModal : false,
    snackBarActive : false,
    drawer:false,
    appLoading:true,
    projectModal:false,
    articlesModal:false,
    snackBarText : null,
    profileTab:0,
    home:null
});

export const mutations = {
    loginModal(state, payload) {
        state.loginModal = payload;
    },
    profileTab(state, payload) {
        state.profileTab = payload;
    },

    appLoading(state, payload) {
        state.appLoading = payload;
    },
    drawer(state, payload) {
        state.drawer = payload;
    },
    projectModal(state, payload) {
        state.projectModal = payload;
    },
    articlesModal(state, payload) {
        state.articlesModal = payload;
    },
    home(state, payload) {
        state.home = payload;
    },
    snackBar(state , payload){
        state.snackBarActive = (payload != null || payload == false);
        state.snackBarText = payload == false ? null : payload
    },
    snackBarText(state , payload){
        state.snackBarText = payload
    },
    snackBarActive(state , payload){
        state.snackBarActive = payload
    }
};

export const getters = {
    loginModal: state => {
        return state.loginModal
    },
    profileTab: state => {
        return state.profileTab
    },
    projectModal: state => {
        return state.projectModal
    },
    articlesModal: state => {
        return state.articlesModal
    },
    
    appLoading: state => {
        return state.appLoading
    },
    drawer: state => {
        return state.drawer
    },
    home: state => {
        return state.home
    },
    roles: state => {
        return state.home == null ? null : state.home.Roles
    },
    projects: state => {
        return state.home == null ? null :  state.home.Projects
    },
    snackBarText: state => {
        return state.snackBarText
    },
    snackBarActive: state => {
        return state.snackBarActive
    }
    
}
