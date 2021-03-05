<template>
  <div id="app" class="app">
    <div class="haut_de_page_fixe">
      <the-picture></the-picture>
      <the-header :candidats="candidats"></the-header>
    </div>
    <div>
      <router-view :candidats="candidats"></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import ThePicture from "./components/ThePicture/ThePicture.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: { TheHeader, ThePicture },
  computed: {
    ...mapGetters("candidat", { candidats: "lesCandidats" }),
  },

  mounted() {
    this.$store.dispatch("candidat/getCandidats");
  },
};
</script>

<style lang="scss">
@import "./assets/scss/globals.scss";
</style>
