<template>
  <div>
    <template v-for="(column, index) in columns">
      <el-table-column
        :key="column.prop"
        v-if="column.type === 'selection' && show(column)"
        v-bind="column"
      ></el-table-column>

      <el-table-column
        v-else-if="column.type === 'expand' && show(column)"
        type="expand"
        :key="column.prop"
        v-bind="column"
      >
        <template slot-scope="props">
          <slot name="expand" v-bind="props"></slot>
        </template>
      </el-table-column>

      <column-slot v-else-if="show(column)" :column="column" :key="index">
        <template :slot="column.prop" slot-scope="props">
          <slot :name="column.prop" v-bind="props"></slot>
        </template>
      </column-slot>
    </template>
  </div>
</template>

<script>
import ColumnSlot from "./ColumnSlot.vue";
export default {
  props: ["columns"],
  components: {
    ColumnSlot,
  },
  methods: {
    show(column) {
      if (column.show == undefined) this.$set(column, "show", true);
      return column.show;
    },
  },
};
</script>

<style></style>
