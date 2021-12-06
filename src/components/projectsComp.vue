<template>
  <div class="projects" id="projects">
    <h3 class="projectsTitle">Quelques projets</h3>

    <div class="projectsBox">
      <button
        class="projectsBox__button Bleft"
        @click="onClickLeft"
        aria-label="boutton gauche"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button
        class="projectsBox__button Bright"
        @click="onClickRight"
        aria-label="boutton droit"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
      <a
        v-for="(project, index) in visibleSlides"
        :key="project"
        :index="index"
        :href="project.link"
        :class="{
          middleBox: index === 1,
          sideBoxR: index > 1,
          sideBoxL: index < 1,
          sideBox: index != 1,
        }"
        target="_blank"
        v-touch:swipe="touchHandler"
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
      </a>
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
          altVignette: "vignette du site groupomania",
          text: "Réseau social d'entreprise créé avec Vue.js et Express/MySql",
        },
        {
          link: "https://mcmicmax.itch.io/",
          preview: require("../assets/gifItchio.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/itchioVignette.png"),
          altVignette: "vignette itchio",
          text: "Quelques jeux créés en utilisant Unity 3D et C#",
        },
        {
          link: "https://camilleesnee.com/",
          preview: require("../assets/gifSweetcreme.gif"),
          altPreview: "gif de preview du site",
          image: require("../assets/camilleEsneeVignette.png"),
          altVignette: "Camille Esnée vignette",
          text: "Site Wordpress & WooCommerce réactualisé",
        },
      ],
      visibleSlide: 0,
      visibleSlides: [],
    };
  },
  methods: {
    calcNext(length, curr, arrOr, arr) {
      curr === length - 1 ? arr.push(arrOr[0]) : arr.push(arrOr[curr + 1]);
    },
    calcPrev(length, curr, arrOr, arr) {
      curr === 0 ? arr.push(arrOr[length - 1]) : arr.push(arrOr[curr - 1]);
    },
    onClickRight() {
      let slideLenght = this.projects.length;
      let dataSlide = this.projects;
      let tempSlide = [];
      let firstSlide = this.visibleSlides[2];
      firstSlide = this.projects.indexOf(firstSlide);

      let prevSlide = this.visibleSlides[1];
      prevSlide = this.projects.indexOf(prevSlide);

      let lastSlide = this.visibleSlides[0];
      lastSlide = this.projects.indexOf(lastSlide);

      this.visibleSlide === slideLenght - 1
        ? (this.visibleSlide = 0)
        : (this.visibleSlide += 1);

      this.calcNext(slideLenght, lastSlide, dataSlide, tempSlide);

      this.calcNext(slideLenght, prevSlide, dataSlide, tempSlide);

      this.calcNext(slideLenght, firstSlide, dataSlide, tempSlide);

      this.visibleSlides = tempSlide;
    },
    onClickLeft() {
      let slideLenght = this.projects.length;
      let dataSlide = this.projects;
      let tempSlide = [];
      let firstSlide = this.visibleSlides[0];
      firstSlide = this.projects.indexOf(firstSlide);

      let prevSlide = this.visibleSlides[1];
      prevSlide = this.projects.indexOf(prevSlide);

      let lastSlide = this.visibleSlides[2];
      lastSlide = this.projects.indexOf(lastSlide);
      console.log(lastSlide);

      if (this.visibleSlide === 0) {
        this.visibleSlide = slideLenght - 1;
      } else {
        this.visibleSlide -= 1;
      }
      this.calcPrev(slideLenght, firstSlide, dataSlide, tempSlide);

      this.calcPrev(slideLenght, prevSlide, dataSlide, tempSlide);

      this.calcPrev(slideLenght, lastSlide, dataSlide, tempSlide);

      this.visibleSlides = tempSlide;
    },
    touchHandler(direction) {
      if (direction === "left") {
        this.onClickLeft();
      }
      if (direction === "right") {
        this.onClickRight();
      }
    },
  },
  mounted() {
    const startSlide = this.projects;
    this.visibleSlide = 0;
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
  align-items: center;
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
  width: 790px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  &__button {
    width: 270px;
    height: 200px;
    // background-color: brown;
    font-size: 1.8rem;
    color: $hover-color;
    display: flex;
    align-items: center;
    z-index: 10;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      color: $primary-color;
      transition: all 0.2s ease-in-out;
    }
  }
}
.Bright {
  position: absolute;
  justify-content: flex-end;
  left: 540px;
}
.Bleft {
  position: absolute;
  right: 540px;
}

.projectBox {
  width: 240px;
  height: 180px;
  border-radius: 15px;
  margin-right: 12px;
  margin-left: 12px;
  position: relative;
  opacity: 0.6;
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
// .sideBoxR {
//   transform: translateY(-15px);
//   transition: all 0.2s ease-in-out;
// }
// .sideBoxL {
//   transform: translateY(-15px);
//   transition: all 0.2s ease-in-out;
// }
.projectBox:hover > .projectBox__preview {
  transition: all 0.3s ease-in-out;

  opacity: 1;
}
.middleBox {
  transform: scale(1.15) translateY(20px);
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
    width: 95%;
    align-items: center;

    justify-content: space-around;
    &__button {
      width: 40px;
      height: 80%;
      // background-color: brown;
    }
  }
  .projectBox {
    width: 80%;
    height: 50%;

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
  .Bright {
    left: 67vw;
    padding-right: 10px;
  }
  .Bleft {
    right: 69vw;
    padding-left: 10px;
  }
  .sideBox {
    display: none;
    transition: all 0.1s ease-in-out;
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
