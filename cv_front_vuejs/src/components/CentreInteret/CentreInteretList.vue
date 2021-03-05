<template>
  <div>
    <centre-interet-item
      class="main__centre__interet"
      v-for="item in candidats[10]"
      :key="item.id"
      :item="item"
      :idIndex="candidats[10].indexOf(item)"
    ></centre-interet-item>
  </div>
</template>

<script>
import centreInteretItem from "./CentreInteretItem";
export default {
  props: ["candidats"],
  components: { centreInteretItem },
};
</script>

<style></style>
