<template>
  <div class="presentation" id="presentation"></div>
</template>

<script>
export default {
  name: "presentationComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.presentation {
  height: 90vh;
  background-color: $secondairy-color;
}
</style>
