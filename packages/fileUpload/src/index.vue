<template>
  <div class="wm-fileUpload">
    <el-upload
      class="fileUpload-demo"
      action=""
      :show-file-list="false"
      :http-request="handleRequest"
      multiple
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <el-button type="primary">{{ fileUplodBtn }}</el-button>
      <div slot="tip"></div>
    </el-upload>
    <div
      class="fileUpload-Box"
      style="display: block; overflow-y: auto; overflow-x: hidden"
      v-if="showBox"
      :style="{ height: arrowUp ? '300px' : '60px' }"
    >
      <div class="box-title">
        <div>
          {{
            showUploadLoading
              ? t("wm.fileUpload.uploading")
              : t("wm.fileUpload.uploadFinish")
          }}
        </div>
        <div>
          <i v-if="arrowUp" class="el-icon-arrow-down" @click="toggle"></i>
          <i v-else class="el-icon-arrow-up" @click="toggle"></i>
          <i
            class="el-icon-close"
            style="margin-left: 10px"
            @click="showBox = false"
          ></i>
        </div>
      </div>
      <div class="fileUpload-contain" v-if="arrowUp">
        <el-table :data="fileList" style="width: 100%" height="250">
          >
          <el-table-column
            prop="originalName"
            :label="t('wm.fileUpload.name')"
            width="250"
            align="left"
          >
            <template slot-scope="scope">
              <el-link @click="downloadFile(scope.row)">
                <span class="table-name">
                  {{ scope.row.originalName }}
                </span>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column
            align="left"
            prop="size"
            :label="t('wm.fileUpload.size')"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            :label="t('wm.fileUpload.status')"
            align="left"
          >
            <template slot-scope="scope">
              <i
                v-if="scope.row.status === 1"
                class="el-icon-success icon success"
              ></i>
              <i v-else class="el-icon-warning icon faild"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="action"
            align="left"
            :label="t('wm.fileUpload.action')"
            width="100"
          >
            <template slot-scope="scope">
              <el-button @click="preview(scope.row)" type="text" size="small">{{
                scope.row.canPreview
                  ? t("wm.fileUpload.preview")
                  : t("wm.fileUpload.download")
              }}</el-button>
              <el-button @click="del(scope.row)" type="text" size="small">{{
                t("wm.fileUpload.delete")
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      :title="t('wm.fileUpload.preview')"
      :visible.sync="dialogVisible"
    >
      <file-preview
        :content="content"
        :info="fileInfo"
        :mode="previewMode"
      ></file-preview>
    </el-dialog>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import filePreview from "./filePreview.vue";
import { canPreviewList, previewMode } from "./utils";
export default {
  components: { filePreview },
  name: "WmFileUpload",
  mixins: [Locale],
  props: {
    handleRequest: {
      type: Function,
      required: true,
    },
    maxFileSize: {
      type: Number,
      default: 20,
    },
    fileUplodBtnText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fileList: [],
      // 记录上传前的文件名称和大小的
      beforeUploadFileList: [],
      content: "",
      dialogVisible: false,
      fileInfo: {},
      previewMode: "",
      arrowUp: false,
      showUploadLoading: false,
      showBox: false,
      canPreviewList,
      fileUplodBtn: this.t("wm.fileUpload.click_upload"),
    };
  },
  methods: {
    created() {
      if (this.fileUplodBtnText) {
        this.fileUplodBtn = this.fileUplodBtnText;
      }
    },
    beforeUpload(file) {
      console.log(111, file);
      if (file.size > 1024 * 1024 * this.maxFileSize) {
        this.$message.warning(
          this.t("wm.fileUpload.max_file_size") + this.maxFileSize + "M"
        );
        return false;
      }
      this.showUploadLoading = true;
      this.showBox = true;
      this.arrowUp = false;
      this.beforeUploadFileList.push({
        name: file.name,
        size: Math.round(file.size / 1024),
      });
    },
    handleSuccess(file) {
      this.beforeUploadFileList.forEach((res) => {
        if (res.name === file.originalName) {
          file.size = res.size + "kb";
          file.status = 1;
          let a = /.*\.(.*)$/;
          let suffix = "";
          let name = file.originalName ? file.originalName : file.name;
          if (name.indexOf(".") !== -1) {
            suffix = a.exec(name)[1];
          } else {
            suffix = "nc";
          }
          if (this.canPreviewList.indexOf(suffix) > -1) {
            file.canPreview = true;
            file.suffix = suffix;
          }
        }
      });
      this.fileList.push(file);
      this.showUploadLoading = false;
      this.arrowUp = true;
      this.$emit("getFileList", this.fileList);
    },
    handleError() {
      this.showUploadLoading = false;
      this.$message.error( this.t("wm.fileUpload.upload_error") )
    },
    toggle() {
      this.arrowUp = !this.arrowUp;
    },
    del(file) {
      this.fileList = this.fileList.filter(
        (res) => res.originalName !== file.originalName
      );
      this.$emit("getFileList", this.fileList);
    },
    // 设置预览的内容
    setContent(data, status) {
      this.content = data;
      this.dialogVisible = status;
    },
    preview(file) {
      if (!file.canPreview) {
        this.downloadFile(file);
      } else {
        for (let key in previewMode) {
          previewMode[key].map(async (item) => {
            if (file.suffix.toLowerCase() === item) {
              this.previewMode = key;
              this.setContent(file.link, true);
            }
          });
        }
      }
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
    downloadFile(content, isPreview) {
      const xhr = new XMLHttpRequest();
      xhr.open("get", content);
      xhr.responseType = "blob";
      xhr.send();
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let that = this;
      xhr.onload = function () {
        if (this.status === 200 || this.status === 304) {
          if (isPreview) {
            // that.setContent(this.response, true)
          } else {
            that.createObject(this.response, content.originalName);
          }
        }
      };
    },
  },
};
</script>
<style scoped>
.fileUpload-Box {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: 600px;
  height: 300px;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 30%);
  background-color: #fff;
  overflow: hidden;
  display: none;
  z-index: 100;
}
.fileUpload-contain .main-title {
  line-height: 30px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  color: #666;
}
.icon {
  font-size: 20px;
}
.success {
  color: rgb(97, 200, 37);
}
.faild {
  color: rgb(251, 73, 73);
}
.box-title {
  background: #ddd;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px;
}
.table-name{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
  display: block;
}
</style>
