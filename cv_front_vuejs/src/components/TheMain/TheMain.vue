<template>
  <div class="theMain colorCyanBlue bgLightGrey">
    <formation :candidats="candidats"></formation>
    <experience-pro :candidats="candidats"></experience-pro>
    <centre-interet :candidats="candidats"></centre-interet>
  </div>
</template>

<script>
import Formation from "../Formation/Formation.vue";
import ExperiencePro from "../ExperiencePro/ExperiencePro.vue";
import CentreInteret from "../CentreInteret/CentreInteret.vue";
export default {
  props: ["candidats"],
  components: { Formation, ExperiencePro, CentreInteret },
};
</script>

<style lang="scss" scoped></style>
