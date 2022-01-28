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
    <WmFileUpload
      :handleRequest="handleFileUpload"
      @getFileList="getFileList"
    ></WmFileUpload>
    <wmSelectTable :columns="columns" :tableData="tableData" :showField="'name'" :choosenData="choosenData" @selectVal="selectVal"></wmSelectTable>
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
import WmFileUpload from "../packages/fileUpload";
import wmSelectTable from "../packages/selectTable";
import axios from "axios";
export default {
  components: { WmFileUpload, WmUpload, wmSelectTable },
  data() {
    return {
      ruleData: ["sdfsdfdas", "asdfasdfadsfadsfdas"],
      columns: [
        {
          title: "id",
          dataIndex: "id",
          width: "100px",
        },
        {
          title: "姓名",
          dataIndex: "name",
          width: "100px",
        },
        {
          title: "地址",
          dataIndex: "address",
        },
      ],
      tableData: [
        {
          id: "1",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "2",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "3",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "4",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "5",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "6",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "7",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "8",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "9",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "10",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "11",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "12",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "13",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "14",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "15",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "16",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "17",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "18",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "19",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "20",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "21",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "22",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "23",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "24",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "25",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "26",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "27",
          name: "张三",
          address: "宋庄鲁",
        },
          {
          id: "28",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "29",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "30",
          name: "张三",
          address: "宋庄鲁",
        },
        {
          id: "31",
          name: "账单",
          address: "上塘路",
        },
        {
          id: "32",
          name: "李斯",
          address: "姓乌鲁",
        },
        {
          id: "33",
          name: "张三",
          address: "宋庄鲁",
        },
      ],
      choosenData: [{
          id: "2",
          name: "张三",
          address: "宋庄鲁",
        },]
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
    selectVal(val) {
      console.log(222, val)
    },
    async handleUpload(file) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/api/blade-system/post/import-post",
        headers: {
          "Blade-Auth":
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MjQyNDczMiwibmJmIjoxNjQyMzg4NzMyfQ.9SzingrPIhGECl7guTAUonigOi_fDWd_4dw91WMKQcQ_97OE1zA7Xfp5ItDJV_ptbs-TkBqJY1clJ9cCu5g8pA",
        },
        data: formData,
      });
      const {
        data: { data },
      } = res;
      return data;
    },
    async handleFileUpload(file) {
      console.log(111, file);
      axios.defaults.withCredentials = true;
      const formData = new FormData();
      formData.append("file", file.file);
      const res = await axios({
        method: "post",
        url: "/api/blade-resource/oss/endpoint/put-file",
        headers: {
          "Blade-Auth":
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjE0NTU0MDY1MDcxMjAxOTM1MzgiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY0MjYwNDM3MCwibmJmIjoxNjQyNTY4MzcwfQ.-7fo_dYQFBowlkKImp2OD3cgZjad8jKo2tZ0KZ7gntSsO82nKb7sLBVGy4mC3vahc9K5FpYQWVEeWBPDopqZlg",
        },
        data: formData,
      });
      const {
        data: { data },
      } = res;
      console.log("111", data);
      return data;
    },
    getFileList(fileList) {
      console.log(11223, fileList);
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
