<template>
  <div class="whoAmI" id="whoAmI">
    <div class="blockTxt">
      <h3 class="blockTxt__title">Qui suis-je ?</h3>
      <p class="blockTxt__txt">
        Après plusieurs années de travail alimentaire pendant lesquels j'ai
        beaucoup appris du monde du travail et surtout du travail en équipe,
        j'ai décidé de suivre une formation dans un domaine qui me passionne
        depuis toujours. <br />C'est pourquoi j'ai fait la formation développeur
        web d'OpenClasserooms afin de consolidé des bases et de découvrir plus
        en profondeur ce métier passionnant !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "whoAmIComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.whoAmI {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $tertiary-color;
  padding-left: 15%;
  padding-right: 15%;
}
.blockTxt {
  color: $primary-color;
  &__title {
    margin-bottom: 70px;
    font-size: $title-font;
  }
  &__txt {
    font-size: $regular-font;
    max-width: 550px;
  }
}
.blockTxt:hover {
  color: $hover-color;
  transition: all 0.25s ease-in-out;
}
</style>
