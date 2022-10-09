import Vue from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faCircleUser);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  el: "#app",
  components: { App },
  template: "<App/>",
}).$mount("#app");
