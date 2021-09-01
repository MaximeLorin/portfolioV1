<template>
  <div class="presentation" id="presentation">
    <div class="visualBox">
      <div class="visualBox__imgs"></div>

      <img
        src="../assets/blob.svg"
        alt="blob shape"
        class="visualBox__imgs--1"
      />
    </div>
    <div class="textBox">
      <h3 class="textBox__title">Maxime Lorin Développeur web</h3>
      <p class="textBox__content">
        Développeur en quête de nouveaux défis et toujours prêt à apprendre !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentationComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.presentation {
  height: 88vh;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;

  background-color: $secondairy-color;
}
.visualBox {
  height: 50%;
  display: flex;
  justify-content: center;
  padding-top: 7vh;
  &__imgs--1 {
    max-height: 400px;
    max-width: 400px;
  }
}
.visualBox__imgs--1:hover {
  cursor: pointer;
  transform: rotateZ(10deg);

  transition: all 0.2s ease-in-out;
}
.textBox {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $primary-color;
  &__title {
    font-size: $title-font;
    margin-bottom: 10px;
  }
  &__content {
    max-width: 380px;
    font-size: $regular-font;
  }
}
</style>
