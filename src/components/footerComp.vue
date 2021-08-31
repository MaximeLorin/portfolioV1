<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: "footerComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.footer {
  height: 30vh;
  background-color: $secondairy-color;
}
</style>
