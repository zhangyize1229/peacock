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
    <WmFileUpload :handleRequest="handleFileUpload" @getFileList="getFileList"></WmFileUpload>
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
import WmFileUpload  from '../packages/fileUpload'
import axios from "axios";
export default {
  components: {  WmFileUpload ,WmUpload},
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
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MjQyNDczMiwibmJmIjoxNjQyMzg4NzMyfQ.9SzingrPIhGECl7guTAUonigOi_fDWd_4dw91WMKQcQ_97OE1zA7Xfp5ItDJV_ptbs-TkBqJY1clJ9cCu5g8pA"
     },
        data: formData,
      });
      const {
        data: { data },
      } = res;
      return data;
    },
    async handleFileUpload(file) {
      console.log(111, file)
      axios.defaults.withCredentials = true;
      const formData = new FormData();
      formData.append("file", file.file);
      const res = await axios({
        method: "post",
        url: "/api/blade-resource/oss/endpoint/put-file",
        headers: {
          "Blade-Auth": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MjQzODM1MiwibmJmIjoxNjQyNDAyMzUyfQ.KytJGBMNrdun_uPpTjkt8YKRq0BJCIcY6o81RJJ7XUYbJrWdKomCpIg1WVL3LO7s9Sd58cAzu1ICmlVes_UEMA"
       },
        data: formData,
      });
      const {
        data: { data },
      } = res;
      console.log('111', data)
      return data;
    },
    getFileList(fileList) {
      console.log(11223, fileList)
    }
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 500px;
}
</style>
