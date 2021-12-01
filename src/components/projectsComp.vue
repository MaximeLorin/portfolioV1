<template>
  <div class="projects" id="projects">
    <h3 class="projectsTitle">Quelques projets</h3>
    <div class="projectsBox">
      <button class="projectsBox__button Bleft" @click="onClickLeft">
        previous
      </button>
      <button class="projectsBox__button Bright" @click="onClickRight">
        next
      </button>
      <div
        v-for="(project, index) in visibleSlides"
        :key="project"
        :index="index"
        :href="project.link"
        target="_blank"
        class="projectBox"
      >
        <div class="projectBox__preview">
          <img
            class="projectBox__preview--img"
            :src="project.preview"
            :alt="project.altPreview"
          />
        </div>
        <img
          :src="project.image"
          :alt="project.altVignette"
          class="projectBox__img"
        />
        <div class="shadowBox">
          <p class="shadowBox__txt">
            {{ project.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="projectsButton">
      <a
        class="projectsGit"
        href="https://github.com/MaximeLorin"
        target="_blank"
        ><font-awesome-icon
          :icon="['fab', 'github']"
          class="projectsGit__icon"
        />Page GitHub</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "projectsComp",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      projects: [
        {
          link: "https://maximelorin.github.io/MaximeLorin_3_20022021/",
          preview: require("../assets/gifOhmyfood.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/ohMyFoodVignette.png"),
          altVignette: "vignette ohmyfood",
          text:
            "Site créé en utilisant html et Sass pour s'entrainer aux animations",
        },
        {
          link: "https://groupomania.maximelorin.com/?#/login",
          preview: require("../assets/gifGroupomania.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/groupomaniaVignette.png"),
          alt: "vignette du site groupomania",
          text: "Réseau social d'entreprise créé avec Vue.js et Express/MySql",
        },
        {
          link: "https://mcmicmax.itch.io/",
          preview: require("../assets/gifItchio.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/itchioVignette.png"),
          alt: "vignette itchio",
          text: "Quelques jeux créés en utilisant Unity 3D et C#",
        },
        {
          link: "https://camilleesnee.com/",
          preview: require("../assets/gifSweetcreme.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/camilleEsneeVignette.png"),
          alt: "Camille Esnée vignette",
          text: "Site Wordpress & WooCommerce réactualisé",
        },
      ],
      visibleSlide: 0,
      visibleSlides: [],
    };
  },
  methods: {
    onClickRight() {
      let slideLenght = this.projects.length;

      let prevSlide = 0;
      let tempSlide = [];

      prevSlide = this.projects[this.visibleSlide];

      if (this.visibleSlide > slideLenght - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide += 1;
      }
      console.log(this.visibleSlide);
      tempSlide.push(prevSlide);
      tempSlide.push(this.projects[this.visibleSlide]);

      if (this.visibleSlide === slideLenght - 1) {
        tempSlide.push(this.projects[0]);
        this.visibleSlide = 0;
      } else {
        tempSlide.push(this.projects[this.visibleSlide + 1]);
      }

      this.visibleSlides = tempSlide;
    },
    onClickLeft() {
      let slideLenght = this.projects.length;
      let projectSlide = this.projects;

      let tempSlide = [];
      let firstSlide = this.visibleSlides[0];
      let prevSlide = this.visibleSlide;
      let lastSlide = parseInt(this.visibleSlides.slice(2));

      if (this.visibleSlide === 0) {
        this.visibleSlide = slideLenght - 1;
      } else {
        this.visibleSlide -= 1;
      }

      if (firstSlide === projectSlide[0]) {
        tempSlide.push(this.projects[slideLenght - 1]);
      } else {
        tempSlide.push(this.projects[firstSlide - 1]);
      }

      if (prevSlide === projectSlide[0]) {
        tempSlide.push(this.projects[slideLenght - 1]);
      } else {
        tempSlide.push(this.projects[prevSlide - 1]);
      }

      if (lastSlide === projectSlide[0]) {
        tempSlide.push(this.projects[slideLenght - 1]);
      } else {
        tempSlide.push(this.projects[lastSlide - 1]);
      }
      this.visibleSlides = tempSlide;
    },
  },
  mounted() {
    const startSlide = this.projects;
    this.visibleSlides = [startSlide[3], startSlide[0], startSlide[1]];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.projects {
  height: 100vh;
  background-color: $secondairy-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
  padding-right: 15%;
}
.projectsTitle {
  color: $hover-color;
  font-size: $title-font;
  margin-top: 10%;
  margin-bottom: 12%;
}
.projectsBox {
  display: flex;
  height: 200px;
  justify-content: space-around;
  &__button {
    width: 100px;
    height: 50px;

    background-color: brown;
  }
}
.Bright {
  position: absolute;
  left: 80vw;
}
.Bleft {
  position: absolute;
  right: 80vw;
}

.projectBox {
  width: 30%;
  height: 100%;
  border-radius: 15px;
  margin-right: 25px;
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
  &__preview {
    position: absolute;
    opacity: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: black;
    &--img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.projectBox:hover > .projectBox__preview {
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
.shadowBox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: transparent;
  color: transparent;
  &__txt {
    width: 70%;
    font-size: $subtitle-font;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: #72a1b4e5;
    color: $secondairy-color;
  }
}
.projectsButton {
  width: 100%;
  height: 30%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.projectsGit {
  width: 170px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $regular-font;
  color: $hover-color;
  border: solid 2px $hover-color;
  &__icon {
    margin-right: 5px;
  }
  &:hover {
    color: $secondairy-color;
    background-color: $hover-color;
    transition: all 0.2s ease-in-out;
  }
}
@include screen-mobile {
  .projectsBox {
    display: flex;
    height: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .projectBox {
    width: 85%;
    height: 30%;

    &__img {
      width: 100%;
      height: 100%;
    }
    &__preview {
      width: 100%;
      top: -100%;
      height: 100%;
      border-radius: 15px;
      background-color: black;
      &--img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .shadowBox {
    width: 100%;
    height: 100%;

    &__txt {
      width: 90%;
    }
  }
}
@include screen-mobileV {
  .projects {
    height: 200vh;
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
  }
  .projectsTitle {
    margin-top: 8vh;
    margin-bottom: 2%;
  }
  .projectBox {
    height: 100%;

    &__img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
