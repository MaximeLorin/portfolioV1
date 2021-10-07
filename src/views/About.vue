<template>
  <div>
    <headerContactComp />
    <contactComp />
    <footerComp />
  </div>
</template>
<script>
// @ is an alias to /src
import headerContactComp from "@/components/headerContactComp.vue";
import contactComp from "@/components/contactComp.vue";
import footerComp from "@/components/footerComp.vue";

export default {
  name: "Home",
  components: {
    headerContactComp,
    contactComp,
    footerComp,
  },
};
</script>
