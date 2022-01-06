import Upload from "../packages/upload/index";
import locale from "./locale";

const components = [Upload];
const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$ELEMENT = {
    size: opts.size || "mini",
    zIndex: opts.zIndex || 2000,
  };
};
/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  version: "0.1.25",
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Upload,
};
