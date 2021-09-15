<template>
  <footer class="footer">
    <div class="footerIcons">
      <a
        href="https://www.linkedin.com/in/maxime-lorin-950b771bb/"
        class="footerIcons__linkedin"
        ><font-awesome-icon
          :icon="['fab', 'linkedin-in']"
          class="projectsGit__icon"
      /></a>
      <a href="https://github.com/MaximeLorin" class="footerIcons__github"
        ><font-awesome-icon :icon="['fab', 'github']" class="projectsGit__icon"
      /></a>
      <a href="https://mcmicmax.itch.io/" class="footerIcons__itchio"
        ><font-awesome-icon :icon="['fab', 'itch-io']" class="projectsGit__icon"
      /></a>
    </div>
    <p class="footerCredit">©2021 Maxime Lorin</p>
  </footer>
</template>

<script>
export default {
  name: "footerComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.footer {
  height: 15vh;
  background-color: $secondairy-color;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footerIcons {
  font-size: $title-font;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2vh;
  width: 200px;
  &__linkedin {
    border: solid 1px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    &:hover {
      color: $secondairy-color;
      background-color: $primary-color;
      transition: all 0.2s ease-in-out;
    }
  }
  &__github {
    border: solid 1px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    &:hover {
      color: $secondairy-color;
      background-color: $primary-color;
      transition: all 0.2s ease-in-out;
    }
  }
  &__itchio {
    border: solid 1px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    &:hover {
      color: $secondairy-color;
      background-color: $primary-color;
      transition: all 0.2s ease-in-out;
    }
  }
}
.footerCredit {
  margin-top: 4vh;
}
</style>
