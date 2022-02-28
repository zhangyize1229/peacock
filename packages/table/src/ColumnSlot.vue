<template>
  <el-table-column
    :key="column.prop"
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
      <template v-else>
        <jsx :value="handleDetail(props, column)"></jsx>
      </template>
      
    </template>

    <template slot="header" slot-scope="scope">
      <jsx :value="(column.labelFormat &&  column.labelFormat(scope)) || column.label"></jsx>
    </template>
  </el-table-column>
</template>
<script>
export default {
  props: {
    column: Object,
  },
  inject: ["table"],
  components: {
      jsx: {
        props: ['value'],
        render(h){
          return <span>{this.value}</span>
        }
      }
  },
  methods: {
    handleDetail(props, column) {
      if (column.formatter && typeof column.formatter === 'function') {
        return column.formatter(props.row, props.column);
      } else {
        return props.row[column.prop];
      }
    },
  },
};
</script>
