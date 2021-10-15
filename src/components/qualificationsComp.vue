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
  width: 25%;
  border-radius: 15px;
  border: solid 2px $hover-color;
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
@include screen-mobile {
  .qualifications {
    height: 200vh;
    justify-content: start;
    &__title {
      font-size: $title-font;
      margin-top: 10%;
      margin-bottom: 10%;
    }
  }
  .containerQualif {
    height: 90%;
    flex-direction: column;
  }
  .blockQualif {
    height: 33%;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__title {
      margin-top: 5px;
    }
    &__subtitle {
      margin-top: 2px;
    }
    &__txt {
      margin-top: 2px;
    }
  }
}
@include screen-mobileV {
  .qualifications {
    height: 250vh;
    &__title {
      font-size: $title-font;
      margin-bottom: 7px;
    }
  }
  .blockQualif {
    height: 283px;
    &__title {
      margin-top: 5px;
      font-size: 1.1rem;
    }
    &__subtitle {
      margin-top: 3px;
      font-size: 1.1rem;
    }
    &__txt {
      margin-top: 2px;
      font-size: 1rem;
    }
  }
}
</style>
