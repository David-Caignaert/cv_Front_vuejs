<template>
  <div>
    <div class="main__h1">
      <i class="fas fa-mug-hot"></i>
      <h1 class="main__h1">Centre d'interet</h1>
    </div>
    <div
      v-for="centre in candidat.lesCentreInteret"
      :key="centre.id"
      class="main__centre__interet"
    >
      <p class="main__centre__interet__p1">{{ centre.intitule }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
  },
};
</script>

<style></style>
