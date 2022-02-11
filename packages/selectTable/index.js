import SelectTable from "./src";

/* istanbul ignore next */
SelectTable.install = function (Vue) {
  Vue.component(SelectTable.name, SelectTable);
};

export default SelectTable;
