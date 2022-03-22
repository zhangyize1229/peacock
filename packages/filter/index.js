import Filter from "./src";

/* istanbul ignore next */
Filter.install = function (Vue) {
    Vue.component(Filter.name, Filter);
};

export default Filter;
