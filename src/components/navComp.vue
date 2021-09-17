<template>
  <div class="menuButton" @click="$emit('openNav')">
    <div class="menuButton--burger"></div>
  </div>
</template>

<script>
export default {
  name: "navComp",
  data: function() {
    return {
      open: true,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";
@include screen-mobile {
  .menuButton {
    position: absolute;
    top: 3vh;
    right: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    transition: all 0.25s ease-in-out;
    &--burger {
      width: 30px;
      height: 3px;
      border-radius: 5px;
      background-color: $primary-color;

      transition: all 0.25s ease-in-out;

      &::before {
        transform: translateY(-10px);
        content: "";
        left: 10px;
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background-color: $primary-color;
      }
      &::after {
        transform: translateY(10px);
        content: "";
        position: absolute;
        right: 10px;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background-color: $primary-color;
      }
    }
  }
}
</style>
