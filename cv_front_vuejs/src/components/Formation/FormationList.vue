<template>
  <div>
    <formation-item
      class="main__formation"
      v-for="item in candidats[12]"
      :key="item.id"
      :item="item"
      :idIndex="candidats[12].indexOf(item)"
    ></formation-item>
  </div>
</template>

<script>
import formationItem from "./formationItem.vue";
export default {
  props: ["candidats"],
  components: { formationItem },
};
</script>

<style></style>
