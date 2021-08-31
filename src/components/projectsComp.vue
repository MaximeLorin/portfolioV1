<template>
  <div class="projects" id="projects"></div>
</template>

<script>
export default {
  name: "projectsComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.projects {
  height: 100vh;
  background-color: $tertiary-color;
}
</style>
