<template>
  <!-- partie formations-->
  <div>
    <div class="main__h1">
      <i class="fas fa-user-graduate"></i>
      <h1>formation</h1>
    </div>
    <div
      v-for="formation in candidat.lesFormations"
      :key="formation.id"
      class="main__formation"
    >
      <p class="main__formation__p1">
        {{ formation.anneeObtention }}
      </p>
      <p class="main__formation__p2">
        {{ formation.intitule }} {{ formation.lieu }} {{ formation.ville }}
      </p>
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

<style lang="scss"></style>
