<template>
  <header class="header">
    <img src="../assets/Fichier1.svg" alt="logo" class="logo" />
    <div class="menu">
      <router-link to="#whoAmI" class="menu__txt">Qui suis-je ?</router-link>
      <router-link to="#qualifications" class="menu__txt"
        >Compétences</router-link
      >
      <router-link to="#projects" class="menu__txt">Projets</router-link>
      <router-link to="" class="menu__txt">Contact</router-link>
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

.header {
  display: flex;
  justify-content: space-between;
  padding-left: 12.5%;
  padding-right: 12.5%;
  height: 10vh;
  background-color: $tertiary-color;
}
.menu {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__txt {
    color: $primary-color;
  }
}
</style>
