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
import axios from "axios";
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
    async handleUpload(file) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/api/blade-system/post/import-post",
        headers: {
          "Blade-Auth":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MTUyMjE3NywibmJmIjoxNjQxNTE4NTc3fQ.Ph8shxp28ZOz6D0jK2r-0m93yBeoUZQzKGStR0i526WBowR_byhr_QI0HI_Uye0cxY_HBFS5fr1MsqGOJ_Ffvg",
        },
        data: formData,
      });
      const {
        data: { data },
      } = res;
      return data;
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
