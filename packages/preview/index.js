import Preview from "./src/index.vue";
Preview.install = function (Vue) {
  Vue.component(Preview.name, Preview);
};

export default Preview;
