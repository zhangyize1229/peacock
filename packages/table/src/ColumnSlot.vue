<template>
  <el-table-column
    :key="column.prop"
    header-align="left"
    align="left"
    :show-overflow-tooltip="
      column.overflow == undefined ? true : column.overflow
    "
    v-bind="column"
  >
    <template slot-scope="props">
      <slot
        :name="column.prop"
        v-bind="props"
        v-if="table.$scopedSlots[column.prop]"
      ></slot>
      <span v-else v-text="handleDetail(props, column)"></span>
    </template>

    <template slot="header" slot-scope="scope">
      <span
        v-text="
          (column.labelFormat && column.labelFormat(scope)) || column.label
        "
      ></span>
    </template>
  </el-table-column>
</template>
<script>
export default {
  props: {
    column: Object,
  },
  inject: ["table"],
  methods: {
    handleDetail(props, column) {
      if (column.formatter) {
        return column.formatter(props.row, props.column);
      } else {
        return props.row[column.prop];
      }
    },
  },
};
</script>
