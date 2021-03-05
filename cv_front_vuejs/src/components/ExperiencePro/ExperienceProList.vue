<template>
  <div>
    <experience-pro-item
      class="main__experience"
      v-for="item in candidats[11]"
      :key="item.id"
      :item="item"
      :idIndex="candidats[11].indexOf(item)"
    >
    </experience-pro-item>
  </div>
</template>
<script>
import ExperienceProItem from "./ExperienceProItem.vue";
export default {
  props: ["candidats"],
  components: { ExperienceProItem },
};
</script>
<style scoped></style>
