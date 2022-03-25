<template>
  <div class="wm-input">
    <el-input
      v-bind="$props"
      @input="inputChange($event)"
      :placeholder="ph" />
    <div class="button" @click="search"><i class="peacock9 icon-sousuo icon"></i></div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import { Input } from 'element-ui'
export default {
  name: "WmInput",
  mixins: [Locale],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    ...Input.props
  },
  computed: {
    ph(){
      if(this.placeholder && this.placeholder.length>0) {
        return this.placeholder;
      }else{
        return this.t('wm.input.placeholder');
      }
    }
  },
  methods: {
    search() {
      this.$emit('getValue', this.value);
    },
    inputChange(val) {
      this.$emit("input", val);
    },
  }
}
</script>