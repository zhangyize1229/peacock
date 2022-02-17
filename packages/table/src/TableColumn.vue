<template>
  <el-table-column
    :key="column.prop"
    header-align="center"
    align="center"
    :show-overflow-tooltip="column.overflow"
    v-bind="column"
  >
    <template slot-scope="props">
      <slot v-bind="props"></slot>
    </template>
    <template slot="header" slot-scope="scope">
      <jsx
        :value="
          (column.labelFormat && column.labelFormat(scope)) || column.label
        "
      ></jsx>
    </template>
  </el-table-column>
</template>

<script>
export default {
  props: ["column"],
  name: "TreeColumns",
  inject: ["editRow"],
  components: {
    jsx: {
      props: ["value"],
      render(h) {
        return <span>{this.value}</span>;
      },
    },
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
