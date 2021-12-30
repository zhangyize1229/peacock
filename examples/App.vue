<template>
  <div id="app">
    <WmUpload
      :action="action"
      :ruleData="ruleData"
      :number="100"
      :upload="upload"
    />
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
export default {
  components: { WmUpload },
  data() {
    return {
      action: "https://jsonplaceholder.typicode.com/posts/",
      ruleData: ["sdfsdfdas", "asdfasdfadsfadsfdas"],
      upload: { name: "上传图片", icon: "el-icon-eleme" },
    };
  },
  methods: {},
};
</script>
<style>
#app {
  width: 100%;
  height: 500px;
}
</style>
