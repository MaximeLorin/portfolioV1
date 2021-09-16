<template>
  <div class="projects" id="projects">
    <h3 class="projectsTitle">Quelques projets</h3>
    <div class="projectsBox">
      <a
        href="https://maximelorin.github.io/MaximeLorin_3_20022021/"
        target="_blank"
        class="projectBox"
      >
        <img
          src="../assets/ohMyFoodVignette.png"
          alt="Vignette OhMyFood"
          class="projectBox__img"
        />
        <div class="shadowBox">
          <p class="shadowBox__txt">
            Site créé en utilisant html et Sass pour s'entrainer aux animations
          </p>
        </div>
      </a>
      <a
        href="https://groupomania.maximelorin.com/?#/login"
        target="_blank"
        class="projectBox"
      >
        <img
          src="../assets/groupomaniaVignette.png"
          alt="Vignette groupomania"
          class="projectBox__img"
        />
        <div class="shadowBox">
          <p class="shadowBox__txt">
            Réseau social d'entreprise créé avec Vue.js et Express/MySql
          </p>
        </div>
      </a>
      <a href="https://mcmicmax.itch.io/" target="_blank" class="projectBox">
        <img
          src="../assets/itchioVignette.png"
          alt="Vignette Itch.io"
          class="projectBox__img"
        />
        <div class="shadowBox">
          <p class="shadowBox__txt">
            Quelques jeux créé en utilisant Unity 3D et C#
          </p>
        </div>
      </a>
    </div>
    <div class="projectsButton">
      <a
        class="projectsGit"
        href="https://github.com/MaximeLorin"
        target="_blank"
        ><font-awesome-icon
          :icon="['fab', 'github']"
          class="projectsGit__icon"
        />Page GitHub</a
      >
    </div>
  </div>
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
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;
}
.projectsTitle {
  color: $secondairy-color;
  font-size: $title-font;
  margin-top: 10%;
  margin-bottom: 12%;
}
.projectsBox {
  display: flex;
  justify-content: space-around;
}
.projectBox {
  width: 30%;
  height: 260px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  &__img {
    width: 100%;
    height: 260px;
    border-radius: 15px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
}
.shadowBox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: transparent;
  &__txt {
    width: 70%;
    font-size: $subtitle-font;
  }
  &:hover {
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    background-color: #72a1b4e5;
    color: $secondairy-color;
  }
}
.projectsButton {
  width: 100%;
  height: 30%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.projectsGit {
  width: 170px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $regular-font;
  color: $secondairy-color;
  border: solid 2px $secondairy-color;
  &__icon {
    margin-right: 5px;
  }
  &:hover {
    color: $primary-color;
    background-color: $secondairy-color;
    transition: all 0.2s ease-in-out;
  }
}
@include screen-mobile {
  .projectsBox {
    display: flex;
    height: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .projectBox {
    width: 85%;
    height: 30%;

    &__img {
      width: 100%;
      height: 100%;
    }
  }
  .shadowBox {
    width: 100%;
    height: 100%;

    &__txt {
      width: 90%;
    }
  }
}
@include screen-mobileV {
  .projects {
    height: 100vh;
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
  }
  .projectsTitle {
    margin-top: 8vh;
    margin-bottom: 2%;
  }
  .projectBox {
    height: 100%;

    &__img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
