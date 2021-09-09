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
  padding-left: 15%;
  padding-right: 15%;
}
.projectBox {
  width: 350px;
  height: 250px;
  border-radius: 25px;
  overflow: hidden;
  background-color: red;
  position: relative;

  &__img {
    width: 350px;
    height: 250px;
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
  width: 350px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color;
}
</style>
