<template>
  <div>
    <headerComp :open="navOpen" class="sidebar" />
    <navComp @openNav="navOpen = !navOpen" />
    <presentationComp />
    <whoAmIComp />
    <projectsComp />
    <qualificationsComp />
    <footerComp />
  </div>
</template>

<script>
// @ is an alias to /src
import headerComp from "@/components/headerComp.vue";
import presentationComp from "@/components/presentationComp.vue";
import whoAmIComp from "@/components/whoAmIComp.vue";
import projectsComp from "@/components/projectsComp.vue";
import qualificationsComp from "@/components/qualificationsComp.vue";
import footerComp from "@/components/footerComp.vue";
import navComp from "@/components/navComp.vue";

export default {
  name: "Home",
  components: {
    presentationComp,
    headerComp,
    whoAmIComp,
    projectsComp,
    qualificationsComp,
    footerComp,
    navComp,
  },
  data: function() {
    return {
      navOpen: false,
    };
  },
  methods: {
    isMobile() {
      this.navOpen = window.innerWidth >= 680;
    },
  },
  created() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
  },
};
</script>

<style lang="scss">
@import "./public/variables.scss";
</style>
