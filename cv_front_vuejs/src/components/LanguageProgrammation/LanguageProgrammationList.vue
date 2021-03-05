<template>
  <div>
    <language-programmation-item
      v-for="item in candidats[13]"
      :key="item.id"
      :item="item"
      :idIndex="candidats[13].indexOf(item)"
    ></language-programmation-item>
  </div>
</template>

<script>
import LanguageProgrammationItem from "./LanguageProgrammationItem.vue";
export default {
  components: { LanguageProgrammationItem },
  props: ["candidats"],
};
</script>

<style></style>
