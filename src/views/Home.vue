<template>
  <div>
    <headerComp />
    <presentationComp />
    <whoAmIComp />
    <qualificationsComp />
    <projectsComp />
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

export default {
  name: "Home",
  components: {
    presentationComp,
    headerComp,
    whoAmIComp,
    projectsComp,
    qualificationsComp,
    footerComp,
  },
};
</script>
