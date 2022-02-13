<template>
  <div class="wm-attachment">
    <el-upload
      action=""
      :accept="accept"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :http-request="httpRequest"
    >
      <div class="upload-btn">
        <i class="peacock9 icon-plus-square"></i>
        <div class="icon-name">{{ this.t("wm.attachment.add") }}</div>
      </div>
    </el-upload>

    <div :class="['main', mode]">
      <div
        class="item"
        v-for="(i, index) in fileList"
        :key="index"
        @mouseover="hover = index"
        @mouseleave="hover = -1"
      >
        <div class="image">
          <i v-if="iconMap[i[props.type]]" :class="[ 'peacock9', iconMap[i[props.type]].icon ]" :style="{'color': iconMap[i[props.type]].color}"></i>
          <i v-else class="peacock9 icon-file" style=" color: #7B7B7B;"></i>
        </div>
        <div class="text">
          <div class="file-name">{{ i[props.fileName] }}</div>
          <div class="attr" v-show="hover !== index">
            <div class="margin-right">{{ i[props.size] }}</div>
            <div>{{ i[props.time] }}</div>
          </div>
          <div class="icon" v-show="hover == index">
            <i
              class="peacock9 icon-download margin-right"
              @click="download(i)"
            ></i>
            <i class="peacock9 icon-delete" @click="handleRemove(i)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Locale from "../../../src/mixins/locale";
import { downloadFile } from "./download";
export default {
  name: "WmAttachment",
  mixins: [Locale],
  props: {
    fileList: {
      required: true,
      type: Array,
      default: () => [],
    },
    props: {
      type: Object,
      default: () => {
        return {
          fileName: "fileName",
          link: "link",
          size: "size",
          type: 'type',
          time: "time",
        };
      },
    },
    mode: {
      type: String,
      default: "vertical",
    },
    accept: {
      type: String,
      default: "",
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    onRemove: {
      type: Function,
    },
    httpRequest: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {
      hover: -1,
      iconMap: {
        "image/jpeg": {icon: "icon-file-image", color: '#4a90e2'},
        "image/png": {icon: "icon-file-image", color: '#4a90e2'},
        "application/pdf": {icon: "icon-file-pdf", color: '#c33232'},
        "application/zip": {icon: "icon-file-zip", color: '#ffc352'},
        "application/x-rar": {icon: "icon-file-zip", color: '#ffc352'},
      },
    };
  },
  methods: {
    beforeUpload(file) {
      const { size } = file;
      if (size > this.maxSize) {
        this.$message.warning(
          this.t("wm.attachment.file_size") + this.maxSize / 1024 / 1024 + "M"
        );
        return false;
      }
    },
    download(data) {
      const { link, fileName } = data;
      if (link.length > 0) {
        downloadFile(link, fileName, "link");
      }
    },
    handleRemove(file) {
      this.$confirm(
        this.t("wm.attachment.is_delete"),
        this.t("wm.common.warning"),
        {
          confirmButtonText: this.t("wm.common.yes"),
          cancelButtonText: this.t("wm.common.no"),
          type: "warning",
        }
      ).then(() => {
        let fileList = this.fileList;
        fileList.splice(fileList.indexOf(file), 1);
        this.onRemove(file, fileList);
      });
    },
  },
};
</script>