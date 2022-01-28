export const state = () => ({
    loading: false,
    videos:[]
});

export const mutations = {
    loading(state, payload) {
        state.loading = payload;
    },
    videos(state, payload) {
        state.videos = payload;
    },
};

export const getters = {
    loading: state => {
        return state.loading
    },
    videos: state => {
        return state.videos
    },
}