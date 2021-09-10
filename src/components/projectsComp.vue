<template>
  <div class="projects" id="projects">
    <h3 class="projectsTitle">Projets</h3>
    <div class="projectsBox">
      <div class="projectBox">
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
      </div>
      <div class="projectBox">
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
      </div>
      <div class="projectBox">
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
      </div>
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
  border-radius: 25px;
  overflow: hidden;
  background-color: red;
  position: relative;

  &__img {
    width: 100%;
    height: 260px;
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
  background-color: #72a1b452;
  color: transparent;
  &__txt {
    width: 70%;
    font-size: $subtitle-font;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: $hover-color;
    color: $secondairy-color;
  }
}
</style>
