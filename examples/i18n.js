import Vue from "vue";
import VueI18n from "vue-i18n";
import EleLocale from "element-ui/lib/locale";
import eleEn from "element-ui/lib/locale/lang/en";
import eleZh from "element-ui/lib/locale/lang/zh-CN";

import pLocale from "../src/locale";
import pEn from "../lib/locale/lang/en";
import pZh from "../lib/locale/lang/zh";

Vue.use(VueI18n);

const messages = {
  en: {
    ...pEn,
    ...eleEn,
  },
  zh: {
    ...pZh,
    ...eleZh,
  },
};

EleLocale.i18n((key, value) => i18n.t(key, value));
pLocale.i18n((key, value) => i18n.t(key, value));
export const i18n = new VueI18n({
  locale: localStorage.getItem("language") || "en",
  messages,
});