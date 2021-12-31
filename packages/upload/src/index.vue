<template>
  <div class="wm-upload">
    <div class="item" v-for="(item, index) in uploadData" :key="index">
      <div class="header">
        <i v-if="item.header.icon" :class="[item.header.icon, 'icon']"></i>
        <div class="icon number">{{ index + 1 }}</div>
        <div class="title">{{ item.header.msg }}</div>
      </div>
      <div class="content" v-show="item.content">
        <div v-if="item.content.children && item.content.children.length">
          <div class="content-title">
            <div class="msg">{{ item.content.msg }}</div>
            <div class="bold-msg">{{ item.content.boldMsg }}</div>
            <div
              class="dropdown-msg"
              @click="
                () => {
                  showMore = !showMore;
                  visible = !visible;
                }
              "
            >
              {{ item.content.dropDownMsg }}
              <i
                class="el-icon-arrow-down caret"
                :class="{ 'is-reverse': visible }"
              ></i>
            </div>
          </div>
          <div class="showMore" v-if="showMore">
            <div
              class="matters"
              v-for="(value, key) in item.content.children"
              :key="key"
            >
              <div>{{ value }}</div>
            </div>
          </div>
        </div>
        <div class="content-title" v-else>{{ item.content.msg }}</div>
        <div class="btns">
          <el-link
            v-if="item.btn"
            type="primary"
            :icon="downloadObj.icon"
            @click="downloadFile"
            >{{ downloadObj.name }}</el-link
          >
          <el-upload
            v-if="!item.btn"
            :action="action"
            :headers="headers"
            :limit="limit"
            :accept="accept"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-error="onError"
            :on-success="onSuccess"
          >
            <el-button type="primary" size="mini" :icon="uploadObj.icon">{{
              uploadObj.name
            }}</el-button>
          </el-upload>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import locale from "../../core/common/locale.js";
import { downloadFile } from "./download";
export default {
  name: "WmUpload",
  mixins: [locale],
  props: {
    resource: {
      type: Array,
      default: () => {
        return [];
      },
    },
    ruleData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    action: {
      type: String,
      default: "",
      required: true,
    },
    limit: {
      type: Number,
      default: 1,
    },
    headers: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    number: {
      type: Number,
      default: 200,
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    accept: {
      type: String,
      default: ".xls,.xlsx",
    },
    upload: {
      type: Object,
      default: () => {
        return {};
      },
    },
    download: {
      type: Object,
      default: () => {
        return {};
      },
    },
    link: {
      type: String,
      default: "",
    },
    blob: {
      type: String,
      default: "",
    },
  },
  computed: {
    uploadData() {
      let arr = [
        {
          header: { icon: "", msg: this.t("upload.prepare") },
          btn: true,
          content: {
            msg: `${this.t("upload.data_less")}${this.number},${this.t(
              "upload.refer_template"
            )}`,
            boldMsg: this.t("upload.not_meet_rules_not_import"),
            dropDownMsg: this.t("upload.more_import"),
            children: this.ruleData,
          },
        },
        {
          header: { icon: "", msg: this.t("upload.upload_data_file") },
          btn: false,
          content: { msg: this.t("upload.accept") + this.accept, children: [] },
        },
      ];
      if (this.resource.length) {
        arr = this.resource;
      }
      return arr;
    },
    downloadObj() {
      return Object.assign(
        { name: this.t("upload.download_template"), icon: "el-icon-download" },
        this.download
      );
    },
    uploadObj() {
      return Object.assign(
        { name: this.t("upload.upload_file"), icon: "el-icon-upload" },
        this.upload
      );
    },
  },
  data() {
    return {
      showMore: false,
      visible: false,
    };
  },
  methods: {
    downloadFile() {
      if (this.blob) {
        downloadFile(this.blob, "file");
      }
      if (this.link) {
        window.open(this.link, "_blank");
      }
    },
    beforeUpload(file) {
      const { size } = file;
      if (size > this.maxSize) {
        this.$message.warning(
          this.t("upload.file_size") + this.maxSize / 1024 / 1024 + "M"
        );
        return false;
      }
    },
    onError(err) {
      console.log(err);
      // TODO: handle err -> download error excel
    },
    onSuccess(res) {
      console.log(res);
      this.$message.warning(this.t("upload.common.ok"));
    },
  },
};
</script>
