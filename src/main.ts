import { createApp } from 'vue';
import { createStore, Store } from 'vuex';
import { Video, StoreState } from './StoreState'
import App from './App.vue';


const app = createApp(App);

const store = createStore<StoreState>({
  state: {
    videos: [],
    currentVideo: undefined
  },
  mutations: {
    SET_VIDEOS(state, payload: Array<Video>) {
      state.videos = payload;
    },
    CHANGE_VIDEO(state, payload: string) {
      console.log(payload)
      state.currentVideo = payload;
    }
  }
});

app.use(store);

app.mount('#app');
