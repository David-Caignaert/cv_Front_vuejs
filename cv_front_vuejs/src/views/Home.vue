<template>
  <div class="home">
    <the-aside :candidats="candidats"></the-aside>
    <the-main :candidats="candidats"></the-main>
  </div>
</template>

<script>
import TheAside from "../components/TheAside/TheAside.vue";
import TheMain from "../components/TheMain/TheMain.vue";

export default {
  props: ["candidats"],
  components: {
    TheAside,
    TheMain,
  },
};
</script>

<style></style>
