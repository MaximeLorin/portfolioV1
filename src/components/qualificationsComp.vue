<template>
  <div class="qualifications" id="qualifications">
    <h3 class="qualifications__title">Compétences</h3>
    <div class="containerQualif">
      <div class="blockQualif ">
        <h4 class="blockQualif__title">FRONT END</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">
          <font-awesome-icon :icon="['fab', 'html5']" aria-label="icone html" />

          <font-awesome-icon
            :icon="['fab', 'css3-alt']"
            aria-label="icone css"
          />
          <br />
          <font-awesome-icon :icon="['fab', 'sass']" aria-label="icone sass" />
          <br />
          <font-awesome-icon
            :icon="['fab', 'js-square']"
            aria-label="icone javascript"
          />
        </p>
        <h5 class="blockQualif__subtitle">Framework</h5>
        <p class="blockQualif__txt">
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            aria-label="icone vue.js"
          /><br />
        </p>
        <h5 class="blockQualif__subtitle">Outils</h5>
        <p class="blockQualif__txt--wrt">
          • Visual Studio Code <br />
          • Suite Adobe<br />
          • Figma
        </p>
      </div>
      <div class="blockQualif borders">
        <h4 class="blockQualif__title">BACK END</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">
          <img
            src="../assets/tsIcon.png"
            alt="icone typescript"
            class="pngIcons"
          /><br />
          <img
            src="../assets/mySqlIcon.png"
            alt="icone mysql"
            class="pngIcons"
          /><br />
          <img
            src="../assets/mongoDbIcon.png"
            alt="icone mongoDb"
            class="pngIcons"
          />
        </p>
        <h5 class="blockQualif__subtitle">Framework</h5>
        <p class="blockQualif__txt">
          <font-awesome-icon
            :icon="['fab', 'node-js']"
            aria-label="icone node js"
          /><br />
        </p>
        <h5 class="blockQualif__subtitle">Outils</h5>
        <p class="blockQualif__txt--wrt">
          • Postman<br />
          • MySql Workbench<br />
        </p>
      </div>
      <div class="blockQualif">
        <h4 class="blockQualif__title">AUTRES</h4>
        <h5 class="blockQualif__subtitle">Langages</h5>
        <p class="blockQualif__txt">
          <font-awesome-icon
            :icon="['fab', 'unity']"
            aria-label="icone unity"
          />
          <br />
        </p>

        <h5 class="blockQualif__subtitle">Outils Annexes</h5>
        <p class="blockQualif__txt--wrt">
          • Git/GitHub<br />
          • Docker <br />
          • Blender <br />
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
  min-height: 100vh;
  background-color: $hover-color;
  padding-left: 15%;
  padding-right: 15%;
  color: $secondairy-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    font-size: $title-font;
    margin-bottom: 70px;
  }
}
.pngIcons {
  width: $title-font;
  height: $title-font;
}
.containerQualif {
  display: flex;
  justify-content: space-around;
}
.blockQualif {
  height: 480px;
  width: 33%;

  &__title {
    margin-top: 10px;
    font-size: $subtitle-font;
  }
  &__subtitle {
    margin-top: 10px;
    font-size: $subtitle-font;
  }
  &__txt {
    margin-top: 5px;
    font-size: $title-font;
    &--wrt {
      font-size: $regular-font;
    }
  }
}
.borders {
  border-right: solid 2px $secondairy-color;
  border-left: solid 2px $secondairy-color;
}
@include screen-mobile {
  .qualifications {
    min-height: 200vh;
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
  .borders {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: solid 2px $secondairy-color;
    border-bottom: solid 2px $secondairy-color;

    border-right: none;
    border-left: none;
  }
}
// @include screen-mobileV {
//   .qualifications {
//     height: 250vh;
//     &__title {
//       font-size: $title-font;
//       margin-bottom: 7px;
//     }
//   }
//   .blockQualif {
//     height: 283px;
//     &__title {
//       margin-top: 5px;
//       font-size: 1.1rem;
//     }
//     &__subtitle {
//       margin-top: 3px;
//       font-size: 1.1rem;
//     }
//     &__txt {
//       margin-top: 2px;
//       font-size: 1rem;
//     }
//   }
// }
</style>
