export const state = () => ({
    user:null,
    users:[],
    ryadeen:[],
    consultunts:[],
    dummyUserMobadr:{
        Name: "sahar salem elhotamy",
        Name_ar: "خالد بن محمد",
        Serial: "2300100",
        Role_id: 1,
    },
    dummyUserTamooh:{
        Name: "sahar salem elhotamy",
        Name_ar: "زياد بن احمد",
        Serial: "2400100",
        Role_id: 2,
    },
    dummyUserRyady:{
        Name: "sahar salem elhotamy",
        Name_ar: "عبدالله بن مساعد",
        Serial: "2500100",
        Role_id: 3,
    },
    projects:[],
    articles:[],
    loading:true,
    loggedIn:false
});

export const mutations = {
    user(state, payload) {
        state.loggedIn = payload != null
        state.user = payload;
    },
    consultunts(state,payload){
        state.consultunts = payload
    },
     projects(state,payload){
        state.projects = payload
    },
    articles(state,payload){
        state.articles = payload
    },
    ryadeen(state,payload){
        state.ryadeen = payload
    },
    users(state,payload){
        state.users = payload
    },
    loading(state,payload){
        state.loading = payload
    }
   
};

export const getters = {
    user: state => {
        return state.user
    },
    dummyUserMobadr: state => {
        return state.dummyUserMobadr
    },
    dummyUserTamooh: state => {
        return state.dummyUserTamooh
    },
    dummyUserRyady: state => {
        return state.dummyUserRyady
    },
    


    
    projects: state => {
        return state.projects
    },
    articles: state => {
        return state.articles
    },
    loading: state => {
        return state.loading
    },
    consultunts: state => {
        return state.consultunts
    },
    ryadeen: state => {
        return state.ryadeen
    },
    users: state => {
        return state.users
    },
    loggedIn: state => {
        return state.loggedIn
    },
    
}
