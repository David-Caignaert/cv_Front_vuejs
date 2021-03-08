<template>
  <div>
    <div class="candidat_contenu">
      <h1>
        Information personnel
      </h1>
      <hr />
      <div class="candidat">
        <p class="theAside__p">{{ ageCandidat() }} ans</p>
        <p class="theAside__p">{{ candidats[9] }}</p>
        <p class="theAside__p">
          {{ candidats[3] }} {{ candidats[8] }} {{ candidats[5] }}
        </p>
        <p class="theAside__p">{{ candidats[4] }}</p>
        <p class="theAside__p">{{ candidats[7] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["candidats"],

  methods: {
    ageCandidat() {
      let diff = Date.now() - Date.parse(this.candidats[6]);
      let ageCand = new Date(diff);
      return Math.abs(ageCand.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style></style>
