<template>
  <div id="app">
    <el-button @click="setLang">lang</el-button>
    <WmUpload
      :action="action"
      :headers="headers"
      :ruleData="ruleData"
      :number="100"
      :download="handleDownload"
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
      action: "http://192.168.1.40:32002/blade-cps/employee/import-employee",
      ruleData: ["sdfsdfdas", "asdfasdfadsfadsfdas"],
      headers: {
        "Blade-Auth":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MTM4OTMyOCwibmJmIjoxNjQxMzg1NzI4fQ.Bvxj_Xs-me3d3KH7x_-wA0psaD8N7_pD21V_I4yLchgcp80UCZps-2QYk58FKAwZ83zrYI-reyPAheFzkKd4-A",
        Authorization: "Basic c2FiZXI6c2FiZXJfc2VjcmV0",
      },
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
      return { link: "" };
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
