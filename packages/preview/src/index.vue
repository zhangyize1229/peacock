<template>
  <div class="wm-preview">
      <div class="title">
        <div>{{t("wm.preview.preview")}}</div>
        <i @click="close" class="el-icon-close title-icon"></i>
      </div>
      <div class="wapper" v-if="fileList.length > 0">
        <div class="list">
          <div class="icon-title" @click="compare" v-if="(fileList.length > 1) && (!currentFile.suffix || previewMode.text.includes(currentFile.suffix.toLowerCase()))">
            <i class="el-icon-document-add icon"></i>
            {{t("wm.preview.compare")}}
          </div>
          <div class="list-wapper" v-for="(fileInfo, index) in fileList" :key="index">
            <div class="version" @click="choose(index)" :style="{'background': index===current ? '#D0EDFF': '#fff'}">
              <div class="version-wapper">
                <div class="number">{{fileInfo.versionDesc}}</div>
                <div class="current" v-if="fileInfo.isCurrent"> {{t("wm.preview.current")}}</div>
              </div> 
              <div class="date">{{t("wm.preview.update_date")}}{{fileInfo.updateTime ? fileInfo.updateTime : '-'}}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <pre v-highlight="fileContent" v-if="!currentFile.suffix || previewMode.text.includes(currentFile.suffix.toLowerCase())">
            <code></code>     
          </pre>
          <template v-if="previewMode.pdf.includes(currentFile.suffix && currentFile.suffix.toLowerCase())">
            <embed :src="currentFile && currentFile.link" type="application/pdf" style="width: 100%;height: calc(100% - 5px);" />
          </template>
          <template v-if="previewMode.image.includes(currentFile.suffix && currentFile.suffix.toLowerCase())">
            <img :src="currentFile && currentFile.link" style="max-width: 100%;height: auto;" />
          </template>
        </div>
       
        <div class="info">
          <div class="info-title">{{t("wm.preview.file_info")}}</div>
          <div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.name")}}</span> <span class="info-value"> {{(currentFile && currentFile.filename) ? (currentFile && currentFile.filename) : (currentFile && currentFile.name)}}</span></div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.size")}}</span> {{fileSize}}</div>
            <div class="label-wapper" v-if="!currentFile.suffix || previewMode.text.includes(currentFile.suffix.toLowerCase())"><span class="label">{{t("wm.preview.code")}}</span> 
              <el-select v-model="previewEncode">
                <el-option
                  v-for="item in encodingTypes"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.last_update_person")}}</span> <span>{{(currentFile && currentFile.updateUserName) ? (currentFile && currentFile.updateUserName) : '-'}}</span></div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.last_update_date")}}</span> {{(currentFile && currentFile.updateTime) ? (currentFile && currentFile.updateTime) : "-"}}</div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.create_person")}}</span> {{(currentFile && currentFile.createUserName) ? (currentFile && currentFile.createUserName) : "-"}}</div>
            <div class="label-wapper"><span class="label">{{t("wm.preview.create_time")}}</span> {{currentFile && currentFile.createTime}}</div>
            <div class="label-wapper" v-if="currentFile.link" style="cursor:pointer;" @click="downloadFile(currentFile)"><span class="label"> <i  class="el-icon-download download"></i></span><span class="download-file">{{t("wm.preview.download")}}</span></div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import { formatStorageSize } from '../../../src/utils/utils'
export default {
  name: "wmPreview",
  mixins: [Locale],
  data() {
    return {
      // 当前选中的列表的下标
      current: 0,
      currentFile: {},
      encodingTypes: ['ANSI', 'UTF-16 LE', 'UTF-16 BE', 'UTF-8', 'GBK', 'Big5', ' Shift-JIS'],
      previewEncode: 'UTF-8', // txt文件内容预览编码格式
      fileContent: '',
      previewMode:  {
        text: ["txt", "nc", "json", "mpf", "spf", "eia", "stp", "prg", "tap", "conf",""],
        image: ["jpg", "jpeg", "png", "svg", "gif", "bmp"],
        pdf: ["pdf"],
      }
    }
  },
  props: {
    file: {
      type: Blob
    },
    fileList: {
      type: Array,
      default: () => [],
    }
  },
  created() {
    this.currentFile = this.fileList && this.fileList[0]
    if (this.file) {
      this.read(this.file, this.previewEncode)
    }
  },
  watch: {
    previewEncode: {
      handler(val){
       this.read(this.file, val)
      },
      deep: true,
    },
    file: {
      handler(val){
       this.read(val, this.previewEncode)
      },
      deep: true,
    },
  },
  computed: {
    fileSize() {
      if (this.currentFile && this.currentFile.contentLength) {
        return formatStorageSize(this.currentFile.contentLength) 
      }
      return ''
    }
  },
  methods: {
    compare() {
      this.$emit('compare')
    },
    close() {
      this.$emit('closePreview')
    },
    read (content, encode) {
      let reader = new FileReader();
      reader.readAsText(content, encode);
      reader.onload = (e) => {
        this.fileContent = reader.result
      };
    },
    choose(index) {
      this.current = index
      this.currentFile = this.fileList[index]
      this.$emit('chooseFileIndex', index)
    },
    createObject(data, fileName) {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    downloadFile(content) {
      const xhr = new XMLHttpRequest();
      xhr.open("get", content.link);
      xhr.responseType = "blob";
      xhr.send();
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let that = this;
      xhr.onload = function () {
        if (this.status === 200 || this.status === 304) {
          that.createObject(this.response, content.filename || content.name);
        }
      };
    },
  }
};
</script>
<style scoped lang="scss">
.wm-preview{
  background-color:#F8F8F8;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title{
    font-size: 18px;
    border: 1px solid #d8d8d8;
    color: #101010;
    text-indent: 16px;
    line-height: 40px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .title-icon{
      margin-right: 16px;
      font-size: 24px;
      cursor: pointer;
    }
  }
  .wapper{
    flex:1;
    display: flex;
    width: 100%;
    overflow: hidden;
    .list-wapper{
      margin-top: 6px;
    }
    .list{
      width: 300px;
      border-right: 1px solid #d8d8d8;
      height: 100%;
      overflow: auto;
      .icon-title{
        color:#1890FF;
        font-size: 14px;
        text-align: right;
        line-height: 32px;
        padding: 12px 6px 6px 0;
        .icon{
          font-size:18px;
          margin-right: 6px;
        }
      }
      .version{
        border: 1px solid #D8D8D8;
        margin: 0 6px 6px 6px;
        color:rgba(0, 0, 0, 0.85);
        background: #fff;
        font-size: 16px;
        .version-wapper{
          display: flex;
          margin: 16px 8px;
          justify-content: space-between;
        }
        .date{
          font-size: 14px;
          color:rgba(0, 0, 0, 0.25);
          margin: 0 0 8px 8px;
        }
        .current{
          color:rgba(24, 144, 255, 100);
          font-size: 12px;
          border: 1px solid rgba(145, 213, 255, 100);
          padding: 2px 8px;
        }
      }
    }
    .content{
      flex: 1;
      background: #fff;
      margin: 6px 0 0 6px;
      border:1px solid rgba(216, 216, 216, 100);
      overflow: auto;
      max-height: 100%;
    }
    .info{
      width: 336px;
      .info-title{
        color: rgba(0, 0, 0, 0.85);
        font-size: 18px;
        margin: 16px 0 24px 16px;
      }
      .label-wapper{
        margin-bottom: 24px;
        display: flex;
        font-size: 14px;
        color:rgba(0, 0, 0, 0.25);
        .label{
          width: 120px;
          text-align: right;
          display: inline-block;
          color: rgba(0, 0, 0, 0.85);
        }
        .info-value{
            display: inline-block;
            max-width: 180px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .download{
          font-size: 20px;
          color: #1890Ff;
          margin-right: 10px;
          width: 110px;
        }
        .download-file{
          color: #1890Ff;
        }
      }
    }
  }
}
</style>