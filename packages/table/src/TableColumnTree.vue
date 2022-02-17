<template>
  <el-table-column
    :key="column.prop"
    header-align="center"
    align="center"
    :label="column.label"
  >
    <template v-for="(item, index) of column.children">
      <table-column-tree
        v-if="item.children"
        :column="item"
        :key="index"
      ></table-column-tree>
      <table-column :column="item" :key="index">
        <template slot-scope="props">
          <slot v-bind="props"></slot>
        </template>
      </table-column>
    </template>
  </el-table-column>
</template>

<script>
import TableColumn from "./TableColumn.vue";
export default {
  props: ["column"],
  name: "TableColumnTree",
  components: {
    TableColumn,
  },
};
</script>
