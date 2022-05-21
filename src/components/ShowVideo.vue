<script setup lang="ts">
  import { computed } from "vue"
  import { useStore } from "vuex";
  import { StoreState } from "../StoreState";
  import YoutubeVideo from "./YoutubeVideo.vue";

  const store = useStore<StoreState>();
  const currentVideo = computed(() => {
    return store.state.currentVideo;
  })
</script>
<template>
<div class="w-full">
  <div class="yt-container">
    <iframe width="640" height="360" :src="`https://www.youtube.com/embed/${currentVideo}?autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</template>

<style scoped>
div.w-full {
  margin-top: 20px;
  width: 100%;
  display: flex;
}
div.yt-container {
  margin: 0 auto;
}
</style>