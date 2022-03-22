<template>
  <div class="wm-input">
    <el-input v-model="value" :placeholder="t('wm.input.placeholder')">
      <el-button slot="append" class="button" @click="search">{{t('wm.input.search')}}</el-button>
    </el-input>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default {
  name: "WmInput",
  mixins: [Locale],
  data() {
    return{
      value: '',
    }
  },
  methods: {
    search() {
      this.$emit('getValue', this.value);
    }
  }
}
</script>