<script setup lang="ts">
  import { ref } from "vue";
  import { useStore , mapActions} from "vuex";
  import { StoreState, Tab } from "../StoreState";

  const searchQuery = ref("");

  const store = useStore<StoreState>();

  function search() {
    if(searchQuery.value) {
      store.dispatch('searchYoutube', searchQuery.value);
      searchQuery.value = ''
    }
  }
  function back() {
    store.dispatch('back');
  }
</script>

<template>
<div class="search-bar flex">
  <div class="left">
    <button @click="back" class="left-button">
      <img src="/MyTube.png" class="logo" />
    </button>
  </div> 
  <div class="right flex">
    <div class="search-input" >
    <input v-model="searchQuery" class="no-display" @keyup.enter="search" placeholder="Buscar" />
    </div>
    <button @click="search" class="search-button">Buscar</button>
  </div>
   <div class="flex">
    <button @click="back" class="fav-button">Ver mis videos favoritos</button>
  </div>
</div>

</template>

<style scoped>
div.left {
  width: 15%;
  display: flex;
}
div.search-bar {
  background-color: #202020;
  height: 50px;
  width: 100%;
}
div.right {
  width: 70%;
  margin: 0 0 auto 0;
  height: calc(100% - 10px);
  padding: 5px 0;
}
button.left-button {
  outline: none;
  border: 0;
  border-radius: 0;
  margin: auto auto auto 15px;
  background-color: transparent;
  cursor: pointer;
}
div.search-input {
  height: 90%;
  padding: 0 5px;
  width: 80%;
  margin: auto 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid #383838;
  background-color: #121212;
  color: #e2e2e2;
}
input.no-display {
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  color: #e2e2e2;
}

input.no-display:focus {
  border: 0;
  outline: none;
}
img.logo {
  width: 100%;
  margin: auto 0;
}

.flex {
  display: flex;
}

button.search-button {
  outline: none;
  border: 0;
  border-radius: 0;
  background-color: #323232;
  color: #ffffff;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
}

button.fav-button {
  outline: none;
  border: 0;
  border-radius: 0;
  background-color: #ff0000;
  color: #ffffff;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
}

</style>