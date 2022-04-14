<template>
  <div class="filter-item input">
    <el-input
      ref="input"
      :placeholder="form.placeholder"
      :maxLength="form.maxlength"
      v-model="value"
      @clear="clear"
      @blur="handleBlur"
      @keyup.enter.native="handleBlur"
    />
    <div class="icons">
      <div v-show="value" class="item">
        <i class="el-icon-error icon opt" @click.stop="reset"></i>
      </div>
      <div class="divider"></div>
      <div class="item">
        <i class="el-icon-search search" @mousedown="search($event)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";

export default  {
  componentName: 'search',
  mixins: [Locale],
  props: {
    source: Object,
    // props: Object,
  },
  watch: {
    'form.defaultValue': {
      handler(newValue) {
        this.value = newValue
      },
      immediate: true
    },
  },
  computed: {
    form() {
      const p ={
        maxlength: 64,
        defaultValue: '',
        placeholder: this.t('wm.filter.enter_keyword'),
      }
      return {...p, ...this.source }
    },
    // formProps(){
    //   const p = {
    //     placeholder: "placeholder",
    //     maxlength: "maxLength",
    //     defaultValue: "defaultValue",
    //   }
    //   return {...p, ...this.props}
    //
    // }
  },
  data() {
    return {
      value: '',
      oldValue: '',
    }
  },
  methods: {
    handleBlur() {
      if(this.oldValue !== this.value) {
        this.oldValue = this.value
        return this.$emit('change',{type: 'search', value: this.value});
      }
      this.$refs['input'].blur();
    },
    clear() {
      this.handleBlur();
    },
    search(event) {
      this.oldValue = this.value;
      return this.$emit('change',{type: 'search', value: this.value});
    },
    reset() {
      this.value="";
    }
  }
}
</script>