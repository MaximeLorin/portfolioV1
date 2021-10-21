<template>
  <div class="presentation" id="presentation">
    <div class="visualBox">
      <img
        src="../assets/enteteTemp2.png"
        alt="Photo Maxime Lorin"
        class="visualBox__imgs--1"
        :class="{ animImage: isActive }"
        @click="isActive = !isActive"
      />
    </div>
    <div class="textBox">
      <h3 class="textBox__title">Maxime Lorin • Développeur Web</h3>
      <p class="textBox__content">
        Développeur en quête de nouveaux défis et toujours prêt à apprendre !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentationComp",
  data: function() {
    return { isActive: false };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

@keyframes blobbyBlob {
  0% {
    transform: scaleX(1) scaleY(1);
  }
  10% {
    transform: scaleX(0.9) scaleY(0.95);
  }
  20% {
    transform: scaleX(0.7) scaleY(0.65);
  }
  60% {
    transform: scaleX(0.65) scaleY(0.6);
  }
  70% {
    transform: scaleX(1.1) scaleY(1.15);
  }
  80% {
    transform: scaleX(0.8) scaleY(0.85);
  }
  90% {
    transform: scaleX(1.15) scaleY(1.19);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
}

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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 9vh;
  &__imgs--1 {
    height: 100%;
    width: auto;
    max-height: 400px;
    max-width: 346px;
  }
}
.visualBox__imgs--1:hover {
  cursor: pointer;
}
.animImage {
  animation-name: blobbyBlob;
  animation-duration: 0.9s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.textBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
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
@include screen-mobile {
  .visualBox {
    height: 45%;
    display: flex;
    justify-content: center;
    padding-top: 4vh;
  }
}
@include screen-mobileV {
  .textBox {
    margin-top: 10px;

    &__title {
      font-size: $title-font;
      margin-bottom: 5px;
    }
    &__content {
      max-width: 380px;
      font-size: $regular-font;
    }
  }
}
</style>
