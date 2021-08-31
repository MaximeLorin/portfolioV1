<template>
  <div class="qualifications" id="qualifications"></div>
</template>

<script>
export default {
  name: "qualificationsComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.qualifications {
  height: 100vh;
  background-color: $secondairy-color;
}
</style>
