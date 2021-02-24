<template>
  <!-- partie expériences-->
  <div>
    <div class="main__h1">
      <i class="fas fa-user-tie"></i>
      <h1 class="main__h1">expérience professionnelle</h1>
    </div>
    <div
      v-for="experience in candidat.lesExperiencesPro"
      :key="experience.id"
      class="main__experience"
    >
      <p class="main__experience__p1">
        {{ experience.dateDebut }} - {{ experience.dateFin }}
      </p>
      <p class="main__experience__p2">
        {{ experience.intitule }},{{ experience.ville }} {{ experience.lieu }}
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

<style></style>
