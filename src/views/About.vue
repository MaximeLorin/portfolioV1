<template>
  <div>
    <headerContactComp />
    <footerComp />
  </div>
</template>
<script>
// @ is an alias to /src
import headerContactComp from "@/components/headerContactComp.vue";

import footerComp from "@/components/footerComp.vue";

export default {
  name: "Home",
  components: {
    headerContactComp,

    footerComp,
  },
};
</script>
