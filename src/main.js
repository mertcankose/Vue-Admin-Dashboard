import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/app.css";

export const eventBus = new Vue({
  methods: {
    reportNav(value) {
      this.$emit("clickedMenu", value);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App), //component
}).$mount("#app"); //el
