<template>
  <div>
    <div class="main__h1">
      <i class="fas fa-mug-hot theMaini"></i>
      <h1 class="main__h1">Centre d'interet</h1>
      <router-link to="/CentreInteretCreate"
        ><i class="fas fa-plus colorCyanBlue theMaini"></i
      ></router-link>
    </div>
    <centre-interet-list :candidats="candidats"></centre-interet-list>
  </div>
</template>

<script>
import CentreInteretList from "./CentreInteretList.vue";
export default {
  components: { CentreInteretList },
  props: ["candidats"],
};
</script>

<style></style>
