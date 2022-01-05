<template>
  <div class="wm-upload">
    <div class="item">
      <div class="header">
        <div class="icon number">{{ 1 }}</div>
        <div class="title">{{ this.t("wm.upload.prepare") }}</div>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="msg">
            {{
              this.t("wm.upload.data_less") +
              number +
              this.t("wm.upload.refer_template")
            }}
          </div>
          <div class="bold-msg">
            {{ this.t("wm.upload.not_meet_rules_not_import") }}
          </div>
          <div
            class="dropdown-msg"
            @click="
              () => {
                visible = !visible;
              }
            "
          >
            {{ this.t("wm.upload.more_import") }}
            <i
              class="el-icon-arrow-down caret"
              :class="{ 'is-reverse': visible }"
            ></i>
          </div>
        </div>
        <div class="showMore">
          <div v-show="visible">
            <slot></slot>
          </div>
          <div class="btns">
            <el-link
              type="primary"
              :icon="downloadObj.icon"
              @click="handleDownload"
              >{{ downloadObj.name }}</el-link
            >
          </div>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon number">{{ 2 }}</div>
          <div class="title">{{ this.t("wm.upload.upload_data_file") }}</div>
        </div>
        <div class="content">
          <div class="content-title">
            {{ this.t("wm.upload.accept") + ".xls,.xlsx" }}
          </div>
          <div class="btns">
            <el-upload
              :action="action"
              :headers="headers"
              accept=".xls,.xlsx"
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
  </div>
</template>
<script>
import locale from "../../core/common/locale.js";
import { downloadFile } from "./download";
import { includes } from "../../../src/utils/utils";
export default {
  name: "WmUpload",
  mixins: [locale],
  props: {
    action: {
      type: String,
      default: "",
      required: true,
    },
    headers: {
      required: true,
      type: Object,
      validator: function (obj) {
        const keys = Object.keys(obj);
        const arr = ["Authorization", "Blade-Auth"];
        return includes(keys, arr);
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
    downloadMsg: {
      type: Object,
      default: () => {
        return {};
      },
    },
    uploadMsg: {
      type: Object,
      default: () => {
        return {};
      },
    },
    download: {
      required: true,
      type: Function,
    },
  },
  computed: {
    downloadObj() {
      return Object.assign(
        {
          name: this.t("wm.upload.download_template"),
          icon: "el-icon-download",
        },
        this.downloadMsg
      );
    },
    uploadObj() {
      return Object.assign(
        { name: this.t("wm.upload.upload_file"), icon: "el-icon-upload" },
        this.uploadMsg
      );
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    async handleDownload() {
      const data = await this.download();
      if (!data) {
        throw new Error("Missing return value");
      }
      if (data.link) {
        downloadFile(data.link, data.originalName, "link");
      } else {
        downloadFile(data, "file", "blob");
      }
    },
    beforeUpload(file) {
      const { size } = file;
      if (size > this.maxSize) {
        this.$message.warning(
          this.t("wm.upload.file_size") + this.maxSize / 1024 / 1024 + "M"
        );
        return false;
      }
    },
    onError(err) {
      console.log(err);
    },
    onSuccess(res) {
      if (res) {
        this.$message.error(this.t("wm.upload.export_err"));
        downloadFile(res, this.t("wm.upload.export_data") + ".xls", "blob");
      } else {
        this.$message.warning(this.t("wm.common.ok"));
      }
    },
  },
};
</script>
