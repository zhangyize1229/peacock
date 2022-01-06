<template>
  <div id="app">
    <el-button @click="setLang">lang</el-button>
    <WmUpload
      :ruleData="ruleData"
      :number="100"
      :download="handleDownload"
      :httpRequest="handleUpload"
    >
      <div style="padding-left: 20px">sdfsad</div>
    </WmUpload>
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
export default {
  components: { WmUpload },
  data() {
    return {
      ruleData: ["sdfsdfdas", "asdfasdfadsfadsfdas"],
    };
  },
  methods: {
    setLang() {
      let lang = "";
      if (localStorage.getItem("language") == "zh") {
        localStorage.setItem("language", "en");
        lang = "en";
      } else {
        localStorage.setItem("language", "zh");
        lang = "zh";
      }
      this.$i18n.locale = lang;
    },
    handleDownload() {
      // ajax
      // return { link: "" };
    },
    handleUpload(file) {
      console.log(file);
      return true;
    },
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 500px;
}
</style>
