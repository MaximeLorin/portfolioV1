<template>
  <div class="qualifications" id="qualifications">
    <h3 class="qualifications__title">Compétences</h3>
    <div class="containerQualif">
      <div class="blockQualif">
        <h4 class="blockQualif__title"></h4>
        <p class="blockQualif__txt"></p>
      </div>
      <div class="blockQualif">
        <h4 class="blockQualif__title"></h4>
        <p class="blockQualif__txt"></p>
      </div>
      <div class="blockQualif">
        <h4 class="blockQualif__title"></h4>
        <p class="blockQualif__txt"></p>
      </div>
    </div>
  </div>
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
  padding-left: 15%;
  padding-right: 15%;
  color: $primary-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    font-size: $title-font;
    margin-bottom: 70px;
  }
}
.containerQualif {
  display: flex;
  justify-content: space-around;
}
.blockQualif {
  height: 500px;
  width: 300px;
  border-radius: 25px;
  border: solid 2px $primary-color;
}
</style>
