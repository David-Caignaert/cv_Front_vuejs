<template>
  <div id="app" class="app">
    <div class="haut_de_page_fixe">
      <the-picture></the-picture>
      <the-header></the-header>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import ThePicture from "./components/ThePicture/ThePicture.vue";
export default {
  name: "App",

  components: { TheHeader, ThePicture },
};
</script>

<style lang="scss">
@import "./assets/scss/globals.scss";
</style>
