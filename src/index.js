import Upload from "../packages/upload/index";
import fileUpload from "../packages/fileUpload/index";
import wmSelectTable from "../packages/selectTable/index";
import wmTable from "../packages/table/index";
import wmForm from "../packages/form/index";

import locale from "./locale";

const components = [Upload, fileUpload, wmSelectTable, wmTable, wmForm];
const install = function (Vue, opts = {}) {
  Vue.prototype.$OPTS = opts;
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
  version: "0.1.32",
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Upload,
  fileUpload,
  wmSelectTable,
};
