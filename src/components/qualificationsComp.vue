<template>
  <div class="qualifications" id="qualifications">
    <h3 class="qualifications__title">Compétences</h3>
    <div class="containerQualif">
      <div class="blockQualif">
        <h4 class="blockQualif__title">FRONT END</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">
          -Html/Css <br />
          -Scss/Sass <br />
          -JavaScript
        </p>
        <h5 class="blockQualif__subtitle">Framework</h5>
        <p class="blockQualif__txt">-Vue.Js<br /></p>
        <h5 class="blockQualif__subtitle">Outils</h5>
        <p class="blockQualif__txt">
          -Visual Studio Code <br />

          -Suite Adobe<br />
          -Figma
        </p>
      </div>
      <div class="blockQualif">
        <h4 class="blockQualif__title">BACK END</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">
          -JavaScript<br />
          -TypeScript<br />
          -JSON
        </p>
        <h5 class="blockQualif__subtitle">Framework</h5>
        <p class="blockQualif__txt">-Express<br /></p>
        <h5 class="blockQualif__subtitle">Outils</h5>
        <p class="blockQualif__txt">
          -Postman<br />
          -MySql Workbench<br />
        </p>
      </div>
      <div class="blockQualif">
        <h4 class="blockQualif__title">AUTRES</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">-C#(Unity) <br /></p>

        <h5 class="blockQualif__subtitle">Outils Annexes</h5>
        <p class="blockQualif__txt">
          -Git/GitHub<br />
          -Docker <br />
          -Blender <br />
        </p>
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
  height: 480px;
  width: 280px;
  border-radius: 25px;
  border: solid 2px $primary-color;
  &__title {
    margin-top: 25px;
    font-size: $subtitle-font;
  }
  &__subtitle {
    margin-top: 20px;
    font-size: $subtitle-font;
  }
  &__txt {
    margin-top: 5px;
    font-size: $regular-font;
  }
}
</style>
