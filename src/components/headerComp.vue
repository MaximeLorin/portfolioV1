<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/logo4.svg" alt="logo du site" class="logo"
    /></router-link>
    <transition name="show">
      <div class="menu" v-if="open">
        <router-link to="#whoAmI" class="underline"
          ><h2 class="menu__txt">Qui suis-je ?</h2></router-link
        >
        <router-link to="#qualifications" class="underline"
          ><h2 class="menu__txt">Compétences</h2></router-link
        >
        <router-link to="#projects" class="underline"
          ><h2 class="menu__txt">Projets</h2></router-link
        >
        <router-link to="About" class="underline"
          ><h2 class="menu__txt">Contact</h2></router-link
        >
      </div></transition
    >
  </header>
</template>

<script>
export default {
  name: "headerComp",
  data: function() {
    return {};
  },
  props: ["open"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";
.logo {
  margin-top: 15px;
  width: 65px;
  height: 65px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  height: 12vh;
  background-color: $secondairy-color;
}
.menu {
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__txt {
    position: relative;
    font-size: $regular-font;
    font-weight: 100;
    color: $primary-color;
  }
  &__txt:hover {
    color: $hover-color;
    transition: all 0.25s ease-in-out;
  }
}
.menu__txt::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: $line-color;
  left: 0%;
  bottom: -5px;
  transition: all 0.25s ease-in-out;
}
.underline:hover .menu__txt::after {
  width: 70%;
  left: 0;
}
.show {
  &-enter-active,
  &-leave-active {
    transition: all 200ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-80px);
  }
}
@include screen-mobile {
  .header {
    padding-left: 5%;
    padding-right: 5%;
  }
  .menu {
    width: 120px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 9vh;
  }
}
</style>
