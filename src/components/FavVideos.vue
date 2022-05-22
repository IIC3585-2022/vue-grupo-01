<script setup lang="ts">
  import { computed } from "vue"
  import { useStore } from "vuex";
  import { StoreState } from "../StoreState";
  import YoutubeVideo from "./YoutubeVideo.vue";

  const store = useStore<StoreState>();
  const favVideos = computed(() => {
    return store.state.favVideos;
  })
</script>
<template>
<div class="w-full">
  <h1 class="title">Mis videos favoritos</h1>
  <YoutubeVideo v-for="video in favVideos" :video="video" />
</div>
</template>

<style scoped>
div.w-full {
  width: 100%;
  overflow-wrap: break-word;
}

h1.title {
  color: white;
  width: 100%;
  text-align: center;
  display: block;
}
</style>