<template>
  <div class="whoAmI" id="whoAmI">
    <div class="blockTxt">
      <h3 class="blockTxt__title">Qui suis-je ?</h3>
      <p class="blockTxt__txt">
        Depuis toujours, comprendre comment les choses sont faites me fascine,
        d’autant plus dans le domaine de l’informatique. C’est pourquoi j’ai
        décidé d’allier ma curiosité à ma passion pour en faire mon métier.
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
  background-color: $primary-color;
  padding-left: 15%;
  padding-right: 15%;
}
.blockTxt {
  color: $secondairy-color;
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
  color: $tertiary-color;
  transition: all 0.25s ease-in-out;
}
</style>
