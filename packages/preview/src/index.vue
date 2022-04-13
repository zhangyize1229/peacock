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
            <div class="version" @click="choose(index)" :class="{'active':index===current}">
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
    fileList: {
      type: Array,
      default: () => [],
    }
  },
  created() {
    this.currentFile = this.fileList && this.fileList[0]
    if ((!this.currentFile.suffix || this.previewMode.text.includes(this.currentFile.suffix.toLowerCase()))) {
      this.previewFile(this.currentFile.link, this.previewEncode)
    }
  },
  watch: {
    previewEncode: {
      handler(val){
       this.previewFile(this.currentFile.link, val)
      },
      deep: true,
    },
    current: {
      handler(val){
        console.log(112, val)
        if ((!this.currentFile.suffix || this.previewMode.text.includes(this.currentFile.suffix.toLowerCase()))) {
          this.previewFile(this.fileList[val].link, this.previewEncode)
        }
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
    previewFile (url, type) {
      let req = new XMLHttpRequest()
      req.open('GET', url)
      req.responseType = 'blob'
      req.send()
      req.onload = () => {
        const blob = req.response
        var reader = new FileReader()
        reader.readAsArrayBuffer(blob)
        reader.onload = loadEvent => {
          const buffer = loadEvent.target.result
          const txtReader = new FileReader()
          txtReader.onload = (txtEvent) => {
            this.fileContent =  txtEvent.target.result
          }
          txtReader.readAsText(new Blob([buffer]), type)
        }
      }
      req.onerror = (re) => {
        console.log('error', re)
      }
		}
  }
};
</script>