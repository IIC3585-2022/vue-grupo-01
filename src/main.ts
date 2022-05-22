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
