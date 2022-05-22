<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { StoreState, Video, Tab } from '../StoreState';
  const props = defineProps<{video: Video}>()
  const store = useStore<StoreState>();
  function showVideo() {
    store.commit("CHANGE_VIDEO", props.video.id.videoId)
  }
  function addFavVideo(e: MouseEvent) {
    e.stopPropagation()
    store.commit("ADD_FAV_VIDEO", props.video)
  }
  function deleteFavVideo(e: MouseEvent) {
    e.stopPropagation()
    store.commit("DELETE_FAV_VIDEO", props.video)
  }
  const favVideos = computed(() => {
    return store.state.favVideos;
  })
</script>

<template>
  <div class="flex youtube-thumbnail" @click="showVideo" :title="props.video.snippet.title">
    <img :src="props.video.snippet.thumbnails.default.url" :height="`${props.video.snippet.thumbnails.default.height}`" :width="`${props.video.snippet.thumbnails.default.width}`" />
    <div class="video-title">{{props.video.snippet.title}}</div>
    <button class='add-fav' v-if="!favVideos.map(video => video.id.videoId).includes(props.video.id.videoId)" @click="addFavVideo" > Añadir a favorito</button>
    <button class='delete-fav' v-else @click="deleteFavVideo"> Eliminar de favoritos</button>
  </div>
</template>

<style scoped>
  div.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  div.youtube-thumbnail {
    margin-top: 10px;
    cursor: pointer;
    margin-right: 10px;
    overflow-wrap: break-word;
  }

  div.video-title {
    color: white;
    width: 70%;
  }

  button.add-fav {
    height: 40px;
    width: 140px;
    background-color: green;
    color: white;
  }

  button.delete-fav {
    height: 40px;
    width: 140px;
    background-color: red;
    color: white;
  }
</style>