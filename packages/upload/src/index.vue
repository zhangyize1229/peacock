<template>
  <div class="upload">
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
            v-if="item.downLoad"
            type="primary"
            :icon="item.downLoad.icon"
            @click="downloadFile(item.download)"
            >{{ item.downLoad.msg }}</el-link
          >
          <el-upload
            v-if="item.upload"
            :action="action"
            :limit="item.upload.limit"
            :accept="accept"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-error="onError"
            :on-success="onSuccess"
          >
            <el-button type="primary" size="mini" :icon="item.upload.icon">{{
              item.upload.msg
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
    action: {
      type: String,
      default: "",
    },
    limit: {
      type: Number,
      default: 1,
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    accept: {
      type: String,
      default: ".xls,.xlsx",
    },
  },
  computed: {
    uploadData() {
      return [
        {
          header: { icon: "", msg: "准备需求" },
          downLoad: {
            icon: "el-icon-download",
            msg: this.t("upload.download_template"),
            fileName: "模板",
            link: "",
            blob: "",
          },
          content: {
            msg: "导入的数据个数需小于200，所有允许导入的字段请参考模板;",
            boldMsg: "字段不符合规则，整条数据不予以导入",
            dropDownMsg: "更多字段导入规则",
            children: [
              "设备编号：必填；支持大小写字母、数字组合；如”MKd004938“",
              "设备名称：必填；支持大小写字母、汉字、数字组合；如”加工机床001“",
            ],
          },
        },
        {
          header: { icon: "", msg: "上传数据文件" },
          upload: {
            icon: "el-icon-upload",
            msg: this.t("upload.upload_file"),
          },
          content: { msg: "目前支持的文件类型为*.xls、*.xlsx;", children: [] },
        },
      ];
    },
  },
  data() {
    return {
      showMore: false,
      visible: false,
    };
  },
  methods: {
    downloadFile(data) {
      if (data.blob) {
        downloadFile(data.fileName, data.blob);
      }
      if (data.link) {
        window.open(data.link, "_blank");
      }
    },
    beforeUpload(file) {
      console.log(file);
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
    onSuccess() {
      this.$message.warning(this.t("upload.common.ok"));
    },
  },
};
</script>
