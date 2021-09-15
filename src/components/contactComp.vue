<template>
  <div class="contact"></div>
</template>

<script>
export default {
  name: "contactComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.contact {
  height: 20vh;
  background-color: $secondairy-color;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
