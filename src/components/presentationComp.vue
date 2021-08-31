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
      <h3 class="textBox__title">Blalalalalalalalalalalala</h3>
      <p class="textBox__content">
        je usissiois dsqudiodqsidqdsqpsdhqihdoshqdqnq sihdqso hdqs
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
  padding-left: 15%;
  padding-right: 15%;

  background-color: $secondairy-color;
}
.visualBox {
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 12vh;
  &__imgs--1 {
    max-height: 350px;
    max-width: 350px;
    position: absolute;
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
  padding-top: 30vh;
  color: $primary-color;
}
</style>
