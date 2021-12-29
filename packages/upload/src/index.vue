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
          <el-upload v-if="item.upload" v-bind="$props">
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
import { Upload } from "element-ui";
import { downloadFile } from "./download";
export default {
  name: "WmUpload",
  props: {
    uploadData: {
      type: Array,
      default: () => [
        {
          header: { icon: "", msg: "准备需求" },
          downLoad: {
            icon: "el-icon-download",
            msg: "下载模板",
            fileName: "模板",
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
          upload: { icon: "el-icon-download", msg: "下载模板" },
          content: { msg: "目前支持的文件类型为*.xls、*.xlsx;", children: [] },
        },
      ],
    },
    ...Upload.props,
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
    },
  },
};
</script>
<style>
.upload {
  width: 100%;
  height: 100%;
}
.upload .item {
  margin-top: 20px;
}
.upload .header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.upload .header .icon.number {
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 50px;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload .header .title {
  margin-left: 10px;
}
.upload .content {
  padding-left: 20px;
}
.upload .content .content-title {
  display: flex;
  font-size: 14px;
}
.upload .content .content-title .bold-msg {
  margin: 0 8px;
  font-weight: bold;
}
.upload .content .content-title .dropdown-msg {
  color: #4a90e2;
  cursor: pointer;
}
.upload .content .showMore {
  font-size: 12px;
  font-size: #999999;
  padding-left: 20px;
}
.upload .content .matters {
  margin-top: 8px;
}
.upload .btns {
  margin-top: 10px;
}
.upload .caret {
  color: #c0c4cc;
  transition: transform 0.3s;
  transform: rotateZ(-90deg);
}
.upload .is-reverse {
  transform: rotateZ(0);
}
</style>
