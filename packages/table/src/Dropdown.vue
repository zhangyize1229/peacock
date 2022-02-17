<template>
  <el-dropdown size="medium" trigger="click" :hide-on-click="false">
    <el-button icon="el-icon-s-operation"></el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="column in columns" :key="column.label">
        <el-checkbox v-model="column.show" :change="change">{{
          column.label
        }}</el-checkbox>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "WeDropDown",
  props: {
    columns: Array,
  },
  methods: {
    change(val) {
      console.log(val);
    },
  },
};
</script>

<style></style>
