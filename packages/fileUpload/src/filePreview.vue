<template>
  <div
    class="card-container"
    :style="{ height: mode === 'text' || mode === 'pdf' ? '70vh' : '' }"
  >
    <template v-if="mode === 'text'">
      <div class="txt-title">
        <el-select
          v-model="encodeType"
          @change="changeEncode"
          style="width: 100%"
        >
          <el-option
            v-for="(type, index) in encodingTypes"
            :key="index"
            :value="type"
            >{{ type }}</el-option
          >
        </el-select>
      </div>
      <textarea class="txt-content" v-model="content" disabled></textarea>
    </template>
    <template v-if="mode === 'image'">
      <img :src="content" style="max-width: 100%; height: auto" />
    </template>
    <template v-if="mode === 'pdf' || mode === 'text'">
      <embed
        :src="content"
        type="application/pdf"
        style="width: 100%; height: 100%"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "txtPreview",
  model: {
    prop: "encode",
    event: "changeEncode",
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      },
    },
    content: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    encode: {
      // 编码格式
      type: String,
      default: "UTF-8",
    },
    mode: {
      // 预览的文件格式：暂定有image('jpg','jpeg','png','svg','gif')；text(txt,json)；flash(pdf,swf)；word；excel
      type: String,
      default: "",
    },
  },
  data() {
    return {
      encodeType: "UTF-8",
      encodingTypes: [
        "ANSI",
        "UTF-16 LE",
        "UTF-16 BE",
        "UTF-8",
        "GBK",
        "Big5",
        "Shift-JIS",
      ],
    };
  },
  watch: {
    info: {
      handler(val) {
        this.encodeType = this.encode;
      },
      deep: true,
    },
  },
  methods: {
    changeEncode(val) {
      this.$emit("changeEncode", val);
    },
  },
};
</script>

<style scoped>
.card-container {
  overflow: auto;
  /*height: calc(100vh - 219px);*/
  position: relative;
  text-align: center;
  min-height: 30px;
}
.spin-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.txt-title {
  width: 496px;
  margin: 0 auto 16px;
  display: flex;
}
.title-label {
  color: rgba(0, 0, 0, 0.85);
}

.title-value {
  color: rgba(0, 0, 0, 0.65);
}
.txt-content {
  width: 496px;
  margin: 0 auto 16px;
  height: calc(100% - 69px - 32px);
  background-color: #f5f5f5;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  padding: 8px;
  display: block;
  resize: none;
}
</style>
