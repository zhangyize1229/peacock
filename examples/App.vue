<template>
  <div id="app">
    <el-button @click="setLang">lang</el-button>
    <WmUpload :action="action" :ruleData="ruleData" :number="100" />
    <el-pagination
      :current-page="1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
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
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 500px;
}
</style>
