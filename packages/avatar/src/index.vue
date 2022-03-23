<template>
  <div class="wm-avatar">
    <el-image :src="src ? src: defaultSrc" :fit="fit" :style="{'borderRadius': circle ? '50%' : '' }">
      <div slot="error" class="image-error">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <el-popover
      trigger="manual"
      placement="bottom"
      popper-class="avatar-popover"
      v-model="visible">
        <el-upload
          action=""
          :accept="accept"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :http-request="httpRequest"
        >
          <div class="drop-item" @click="visible=false">{{t('wm.avatar.add')}}</div>
        </el-upload>
        <div class="drop-item" v-if="src" @click="()=>{visible=false;remove()}">{{t('wm.avatar.remove')}}</div>
      <el-button slot="reference" class="btn" @click="()=>{visible=!visible}"><i class="el-icon-edit el-icon--left"></i>{{t('wm.avatar.upload')}}</el-button>
    </el-popover>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default {
  name: "WmAvatar",
  mixins: [Locale],
  props: {
    circle: {
      type: Boolean,
      default: true,
    },
    defaultSrc: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: '',
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    httpRequest: {
      required: true,
      type: Function,
    },
  },
  data() {
    return{
      accept: 'image/*',
      visible: false,
    }
  },
  methods: {
    beforeUpload(file) {
      console.log(file)
      const { size, type } = file;
      if(!type.includes('image/')){
        this.$message.warning(
            this.t("wm.common.format_err")
        );
        return  false
      }
      if (size > this.maxSize) {
        this.$message.warning(
            this.t("wm.upload.file_size") + this.maxSize / 1024 / 1024 + "M"
        );
        return false;
      }
    },
    // async handleRequest({ file }) {
    //   const data = await this.httpRequest(file);
    //   if (!data) {
    //     console.log("Missing return value");
    //     return false;
    //   }else{
    //     this.$message.success(this.t("wm.common.ok"));
    //   }
    // },
    remove() {
      this.$confirm(
        this.t("wm.common.is_delete"),
        this.t("wm.common.warning"),
        {
          confirmButtonText: this.t("wm.common.yes"),
          cancelButtonText: this.t("wm.common.no"),
          type: "warning",
        }
      ).then(() => {
        this.$emit('delImage');
      });
    }
  }
}
</script>
<style lang="scss">
.wm-avatar{
  width: 100%;
  height: 100%;
  position: relative;
  .el-image, .image-error{
    width: 100%;
    height: 100%;
  }
  .image-error{
    background-color: #f5f7fa;
    color: #909399;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn{
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
  @at-root .avatar-popover {
    min-width: 100px!important;
    max-width: 120px;
    padding: 10px 0!important;
    .el-upload{
      width: 100%;
    }
    .drop-item{
      height: 26px;
      line-height: 26px;
      cursor: pointer;
      text-overflow: ellipsis;
      text-align: justify;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 16px 0 8px ;
      color: #333333;
      &:hover{
        background-color: #4a90e2;
        color: #ffffff;
      }
    }
  }
}
</style>