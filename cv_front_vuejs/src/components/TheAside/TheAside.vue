<template>
  <div class="theAside colorLightGrey bgCyanBlue">
    <info-candidat :candidats="candidats"></info-candidat>
    <language-programmation
      class="theAside__competence"
      :candidats="candidats"
    ></language-programmation>
  </div>
</template>

<script>
import InfoCandidat from "../InfoCandidat/InfoCandidat.vue";
import LanguageProgrammation from "../LanguageProgrammation/LanguageProgrammation.vue";

export default {
  props: ["candidats"],

  components: {
    InfoCandidat,
    LanguageProgrammation,
  },
};
</script>

<style lang="scss" scoped></style>
