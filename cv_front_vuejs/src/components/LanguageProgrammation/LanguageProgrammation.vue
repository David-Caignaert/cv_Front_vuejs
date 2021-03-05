<template>
  <div>
    <div class="theAside__competence">
      <div>
        <h1>Compétence programmation</h1>
        <router-link to="/LanguageProgrammationCreate"
          ><i class="fas fa-plus colorLightGrey"></i
        ></router-link>
      </div>
      <hr />
      <language-programmation-list
        :candidats="candidats"
      ></language-programmation-list>
    </div>
  </div>
</template>

<script>
import LanguageProgrammationList from "./LanguageProgrammationList.vue";

export default {
  components: { LanguageProgrammationList },
  props: ["candidats"],
};
</script>

<style></style>
