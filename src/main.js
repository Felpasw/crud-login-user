import "vuesax/dist/vuesax.css";
import "./assets/base.css";

import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import Vuesax from "vuesax";

Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
