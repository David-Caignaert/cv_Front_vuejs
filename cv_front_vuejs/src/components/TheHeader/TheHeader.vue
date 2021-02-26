<template>
  <div class="theHeader colorLightGrey bgCyanBlue">
    <h1>{{ candidat.nom }} {{ candidat.prenom }}</h1>
    <h2>développeur web et web mobile</h2>
  </div>
</template>

<script>
export default {
  props: ["candidats"],
  /*  data() {
    return {
      candidat: {},
    };
  },
  mounted() {
    this.$http
      .get("get/getCandidat.php?id=1")
      .then(
        (response) => (
          console.log("responseNom", response.data.nom),
          (this.candidat = response.data),
          console.log("candidat", this.candidat)
        )
      );
  }, */
};
</script>

<style lang="scss" scoped></style>
