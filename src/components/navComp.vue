<template>
  <div class="menuButton" @click="$emit('openNav')">
    <div
      class="menuButton__burger"
      :class="{ animIn: isActive, animOut: !isActive }"
      @click="isActive = !isActive"
    >
      <div class="menuButton__burger--center"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navComp",
  data: function() {
    return { isActive: true };
  },
  props: ["open"],
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

@include screen-mobile {
  @keyframes openav {
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
  @keyframes closenav {
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
  .animIn {
    animation-name: openav;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
  .animOut {
    animation-name: closenav;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
  .menuButton {
    position: absolute;
    top: 2vh;
    right: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    transition: all 0.25s ease-in-out;
    &__burger {
      width: 30px;
      height: 3px;
      border-radius: 35px;
      background-color: $primary-color;
      &--center {
        transform-origin: center;
        position: relative;
        border-radius: 20px;
        right: -10px;
        top: 15px;
        width: 18px;
        height: 2px;
        background-color: $primary-color;
      }
    }
  }
}
</style>
