<template>
  <div class="theHeader colorLightGrey bgCyanBlue">
    <h1>
      {{ candidats[1] }}
      {{ candidats[2] }}
    </h1>
    <h2>développeur web et web mobile</h2>
  </div>
</template>

<script>
export default {
  props: ["candidats"],
};
</script>

<style lang="scss" scoped></style>
