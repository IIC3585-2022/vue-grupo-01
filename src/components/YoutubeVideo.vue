<script setup lang="ts">
  import { useStore } from 'vuex';
  import { StoreState, Video } from '../StoreState';
  const props = defineProps<{video: Video}>()
  const store = useStore<StoreState>();
  function showVideo() {
    store.commit("CHANGE_VIDEO", props.video.id.videoId)
  }
</script>

<template>
  <div class="flex youtube-thumbnail" @click="showVideo" :title="props.video.snippet.title">
    <img :src="props.video.snippet.thumbnails.default.url" :height="`${props.video.snippet.thumbnails.default.height}`" :width="`${props.video.snippet.thumbnails.default.width}`" />
    <div >{{props.video.snippet.title}}</div>
  </div>
</template>

<style scoped>
  div.flex {
    display: flex;
    width: 100%;
  }

  div.youtube-thumbnail {
    margin-top: 10px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    overflow-wrap: break-word;
  }
</style>