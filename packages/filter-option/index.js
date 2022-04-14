import FilterOption from "../filter/src/filter-option";

/* istanbul ignore next */
FilterOption.install = function (Vue) {
  Vue.component(FilterOption.name, FilterOption);
};

export default FilterOption;
