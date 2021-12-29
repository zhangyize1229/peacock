<template>
  <div id="app">
    <WmUpload />
  </div>
</template>

<script>
import WmUpload from "../packages/upload";
export default {
  components: { WmUpload },
  data() {
    return {};
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
