<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import Search from "./components/Search.vue"
import Videos from "./components/Videos.vue"
import ShowVideo from "./components/ShowVideo.vue"
import { reactive, ref, computed } from 'vue'
import { useStore } from "vuex";
import { StoreState } from "./StoreState";

const store = useStore<StoreState>();

const currentVideo = computed(() => {
  return store.state.currentVideo
})
</script>

<template>
<Search />
<div class="centered">
  <Videos v-if="currentVideo === undefined"/>
  <ShowVideo v-if="currentVideo !== undefined"/>
</div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #181818;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.centered {
  width: 70%;
  margin: 0 auto;
}
</style>
