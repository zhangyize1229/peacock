<template>
  <div class="wm-avatar" ref="vm-avatar" :style="{'width': width+'px','height': width+'px'}">
    <el-image :src="src ? src: defaultSrc" :fit="fit" :style="{'borderRadius': circle ? '50%' : '' }">
      <div slot="error" class="image-error" :style="{'fontSize': width/3+'px'}">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <template v-if="!hideBtn">
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
        <div slot="reference" class="btn" @click="()=>{visible=!visible}">
          <i class="el-icon-edit el-icon--left"></i>
          <div>{{t('wm.avatar.upload')}}</div>
        </div>
      </el-popover>
    </template>

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
      default: false,
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
    hideBtn: {
      type: Boolean,
      default: false,
    },
    httpRequest: {
      type: Function,
    },
    width: Number,
  },
  data() {
    return{
      accept: 'image/*',
      visible: false,
    }
  },
  methods: {
    beforeUpload(file) {
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