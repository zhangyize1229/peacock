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
        <div class="icon-name">{{this.t('wm.attachment.add')}}</div>
      </div>
    </el-upload>

    <div :class="['main', mode]">
      <div
        class="item"
        v-for="(i,index) in fileList"
        :key="index"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div class="image">
          <i class="peacock9 icon-file-image" style="color: #4a90e2"></i>
        </div>
        <div class="text">
          <div class="file-name">{{ i[props.fileName] }}</div>
          <div class="attr" v-show="hover==false">
            <div class="margin-right">{{ i[props.size] }}</div>
            <div>{{ i[props.time] }}</div>
          </div>
          <div class="icon" v-show="hover==true">
            <i class="peacock9 icon-download margin-right" @click="download(i)"></i>
            <i class="peacock9 icon-delete"></i>
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
          time: "time",
        };
      },
    },
    mode: {
      type: String,
      default: 'vertical',
    },
    accept: {
      type: String,
      default: '',
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
  data(){
    return{
      hover: false,
      iconMap: {}
    }
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
    download(data){
      const {link, fileName} = data;
      if(link.length>0){
        downloadFile(link, fileName, 'link');
      }
    }
  }
};
</script>