<template>
  <div id="app">
    <WmUpload
      action=""
      :http-request="httpRequest"
      :show-file-list="false"
      accept=".xls,.xlsx"
      :before-upload="beforeUpload"
    />
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
export default {
  components: { WmUpload },
  methods: {
    beforeUpload(file) {
      console.log(file);
    },
    httpRequest() {
      console.log(2);
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
