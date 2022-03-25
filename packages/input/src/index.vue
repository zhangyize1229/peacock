<template>
  <div class="wm-input">
    <el-input v-model="value" :placeholder="ph" />
    <div class="button" @click="search"><i class="peacock9 icon-sousuo icon"></i></div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default {
  name: "WmInput",
  mixins: [Locale],
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    }
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
    }
  }
}
</script>