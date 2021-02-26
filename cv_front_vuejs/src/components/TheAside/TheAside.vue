<template>
  <div class="theAside colorLightGrey bgCyanBlue">
    <div class="candidat_contenu">
      <h1>
        Information personnel
      </h1>
      <hr />
      <div class="candidat">
        <p>{{ ageCandidat() }} ans</p>
        <p>{{ candidat.numTel }}</p>
        <p>
          {{ candidat.adresse }} {{ candidat.codePostal }} {{ candidat.ville }}
        </p>
        <p>{{ candidat.mail }}</p>
        <p>{{ candidat.info }}</p>
      </div>
    </div>
    <div>
      <div class="theAside__competence">
        <h1>Compétence programmation</h1>
        <router-link to="/LanguageProgrammationCreate"
          ><i class="fas fa-plus colorLightGrey"></i
        ></router-link>
      </div>
      <hr />

      <p
        v-for="langPro in candidat.lesLanguagesDeProgrammations"
        :key="langPro.id"
      >
        {{ langPro.logo }} {{ langPro.nom }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["candidats"],
  data() {
    return {
      candidat: {},
    };
  },
  mounted() {
    this.$http
      .get("get/getCandidat.php?id=1")
      .then((response) => (this.candidat = response.data));
  },
  methods: {
    ageCandidat() {
      let diff = Date.now() - Date.parse(this.candidat.dateNaissance);
      let ageCand = new Date(diff);
      return Math.abs(ageCand.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style lang="scss" scoped></style>
