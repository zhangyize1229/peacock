<template>
  <div class="wm-avatar">
    <el-image :src="src ? src: defalutSrc" :fit="fit" :style="{'borderRadius': circle ? '50%' : '' }">
      <div slot="error" class="image-error">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <el-button class="btn"><i class="el-icon-edit el-icon--left"></i>edit</el-button>
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
    defalutSrc: {
      type: String,
      default: 'https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF',
    },
    src: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: '',
    }
  },
  data() {
    return{

    }
  },
  methods: {

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
}
</style>