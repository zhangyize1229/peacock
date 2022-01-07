import Vue from "vue";
import VueI18n from "vue-i18n";
// import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../theme-chalk/lib/index.css";
Vue.use(ElementUI);
Vue.use(VueI18n);
// Vue.user(VueRouter);
import locale1 from "element-ui/lib/locale";
import eleEn from "element-ui/lib/locale/lang/en";
import eleZh from "element-ui/lib/locale/lang/zh-CN";

import locale2 from "../src/locale";
import en1 from "../lib/locale/lang/en";
import zh1 from "../lib/locale/lang/zh";
import App from "./App.vue";
const messages = {
  en: {
    ...en1,
    ...eleEn,
  },
  zh: {
    ...zh1,
    ...eleZh,
  },
};
const i18n = new VueI18n({
  locale: localStorage.getItem("language") || "en",
  messages,
});
locale1.i18n((key, value) => i18n.t(key, value));
locale2.i18n((key, value) => i18n.t(key, value));
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
