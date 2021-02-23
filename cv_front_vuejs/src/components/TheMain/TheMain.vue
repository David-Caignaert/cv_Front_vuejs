<template>
  <div class="theMain colorCyanBlue bgLightGrey">
    <formation></formation>
    <experience-pro></experience-pro>
    <centre-interet></centre-interet>
  </div>
</template>

<script>
import Formation from "../Formation/Formation.vue";
import ExperiencePro from "../ExperiencePro/ExperiencePro.vue";
import CentreInteret from "../CentreInteret/CentreInteret.vue";
export default {
  components: { Formation, ExperiencePro, CentreInteret },
};
</script>

<style lang="scss" scoped></style>
