<template>
  <div class="wm-form" v-if="visible">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item style="cursor: pointer" @click.native="onBack">{{
          this.name
        }}</el-breadcrumb-item>
        <el-breadcrumb-item class="disabled">{{
          this.title
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="Form"
      @keyup.enter.native="(_) => enter && submitForm()"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :size="size"
      class="we-form"
    >
      <slot v-bind:dataForm="dataForm"></slot>
    </el-form>

    <div class="dialog-footer">
      <slot name="footer" v-bind:dataForm="dataForm" v-if="this.$scopedSlots.footer"></slot>
      <div v-else style="margin-left: 14px">
        <el-button
          class="button"
          :loading="loading"
          type="primary"
          @click="submitForm()"
          >{{ t("wm.form.saveBtn") }}</el-button
        >
        <el-button class="button" @click="cancelForm">{{
          t("wm.form.cancelBtn")
        }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default {
  name: "wmForm",
  mixins: [Locale],
  props: {
    dataRule: Object, //表单规则校验
    size: {
      type: String,
      default: "small",
    },
    resetData: Object,
    labelPosition: { type: String, default: "left" },
    labelWidth: {
      type: String,
      default: "80px",
    },
    name: String,
    enter: Boolean
  },
  methods: {
    show(row, title) {
      this.clearData(row);
      this.visible = true;
      if (row) {
        //数据绑定
        this.setVal(row);
        this.isAdd = false;
      } else {
        this.isAdd = true;
      }
      if (title) {
        this.title = title;
      } else {
        this.title =
          (this.isAdd && this.t("wm.form.add")) || this.t("wm.form.edit");
      }
    },
    hide() {
      this.visible = false;
    },
    //默认的确定按键点击
    submitForm() {
      this.getForm().validate((valid) => {
        if (!valid) return;
        this.loading = true;
        this.$emit("submitForm", this.dataForm);
        this.$nextTick((_) => (this.loading = false));
      });
    },
    cancelForm() {
      if (this.$listeners["cancel"]) {
        this.$emit("cancel", this.dataForm);
      } else {
        this.visible = false;
      }
    },
    //重置表单
    resetForm() {
      this.$nextTick(() => {
        this.$refs.Form.resetFields();
      });
    },
    clearData(row) {
      //先重置dataForm
      if (this.dataForm) {
        var params = {};
        for (var i in this.dataForm) {
          this.$set(params, i, null);
        }
        this.setVal(params);
      }
      this.setVal(this.resetData);
    },
    clearValidate() {
      this.$nextTick(() => {
        this.$refs.Form.clearValidate();
      });
    },
    setVal(params) {
      for (var i in params) {
        this.$set(this.dataForm, i, params[i]);
      }
    },
    getForm() {
      return this.$refs.Form;
    },
    onBack() {
      if (this.$listeners["on-back"]) {
        this.$emit("on-back");
      } else {
        this.visible = false;
      }
    },
  },
  data() {
    return {
      visible: false,
      title: "",
      isAdd: true,
      dataForm: {},
      loading: false,
    };
  },
};
</script>
