import { createApp } from 'vue';
import { createStore, Store } from 'vuex';
import { Video, StoreState, Tab } from './StoreState'
import App from './App.vue';


const app = createApp(App);

const store = createStore<StoreState>({
  state: {
    videos: [],
    currentVideo: undefined,
    currentTab: Tab.FAV,
    favVideos: window.localStorage.getItem('favVideos') !== null ? JSON.parse(window.localStorage.getItem('favVideos')!) : [],
  },
  actions: {
    async searchYoutube({ commit }, query: string) {
      const result = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=50&key=AIzaSyA-tvEokrKF-vdJuqA-MXucQclYYiivAXI`)
      const response = await result.json();
      commit("SET_VIDEOS", response.items);
      commit("CHANGE_TAB", Tab.VIDEOS);
      commit("CHANGE_VIDEO", undefined);
    },
    back({commit}) {
      commit("SET_VIDEOS", []);
      commit("CHANGE_TAB", Tab.FAV);
      commit("CHANGE_VIDEO", undefined);
    },
    showVideo({commit}, videoId: string) {
      commit("CHANGE_VIDEO", videoId);
    },
    addFavVideo({commit}, video: Video) {
      commit("ADD_FAV_VIDEO", video);
    },
    deleteFavVideo({commit}, video: Video) {
      commit("DELETE_FAV_VIDEO", video);
    }
  },
  mutations: {
    SET_VIDEOS(state, payload: Array<Video>) {
      state.videos = payload;
    },
    CHANGE_VIDEO(state, payload: string) {
      console.log(payload)
      state.currentVideo = payload;
    },
    ADD_FAV_VIDEO(state, payload: Video) {
      state.favVideos.push(payload);
      window.localStorage.setItem('favVideos', JSON.stringify(state.favVideos));
    },
    DELETE_FAV_VIDEO(state, payload: Video) {
      state.favVideos = state.favVideos.filter((video) => video.id.videoId !== payload.id.videoId)
      window.localStorage.setItem('favVideos', JSON.stringify(state.favVideos));
    },
    CHANGE_TAB(state, payload: Tab) {
      state.currentTab = payload
    },

  }
});

app.use(store);

app.mount('#app');
