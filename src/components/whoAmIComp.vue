<template>
  <div class="whoAmI" id="whoAmI"></div>
</template>

<script>
export default {
  name: "whoAmIComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.whoAmI {
  height: 100vh;
  background-color: $tertiary-color;
}
</style>
