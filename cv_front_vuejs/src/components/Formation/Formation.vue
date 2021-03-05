<template>
  <!-- partie formations-->
  <div>
    <div class="main__h1">
      <i class="fas fa-user-graduate theMaini"></i>
      <h1>formation</h1>
      <router-link to="/FormationCreate"
        ><i class="fas fa-plus colorCyanBlue theMaini"></i
      ></router-link>
    </div>
    <formation-List :candidats="candidats"></formation-List>
  </div>
</template>

<script>
import FormationList from "./FormationList";
export default {
  components: { FormationList },
  props: ["candidats"],
};
</script>

<style lang="scss"></style>
