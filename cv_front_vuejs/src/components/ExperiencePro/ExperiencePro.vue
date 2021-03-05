<template>
  <!-- partie expériences-->
  <div>
    <div class="main__h1">
      <i class="fas fa-user-tie theMaini"></i>
      <h1 class="main__h1">expérience professionnelle</h1>
      <router-link to="/ExperienceProCreate"
        ><i class="fas fa-plus colorCyanBlue theMaini"></i
      ></router-link>
    </div>
    <experience-pro-list :candidats="candidats"></experience-pro-list>
  </div>
</template>

<script>
import ExperienceProList from "./ExperienceProList.vue";
export default {
  components: { ExperienceProList },
  props: ["candidats"],
};
</script>

<style></style>
