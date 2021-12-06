import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3TouchEvents from "vue3-touch-events";

library.add(fab);
library.add(fas);

createApp(App)
  .use(router)
  .use(Vue3TouchEvents)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
