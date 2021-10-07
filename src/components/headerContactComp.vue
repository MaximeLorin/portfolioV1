<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/logo4.svg" alt="logo" class="logo"
    /></router-link>
    <div class="menu">
      <router-link to="/" class="underline"
        ><h2 class="menu__txt">Retour à l'acceuil</h2></router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "headerComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";
.logo {
  margin-top: 15px;
  min-height: 65px;
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
</style>
