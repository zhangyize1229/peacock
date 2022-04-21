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
  componentName: 'Input',
  mixins: [Locale],
  props: {
    model: Object,
    // props: Object,
  },
  watch: {
    'form': {
      handler(v) {
        this.value = v.defaultValue;
        this.componentName = v.componentName;
      },
      immediate: true,
      deep: true
    },
  },
  computed: {
    form() {
      const p ={
        maxlength: 64,
        defaultValue: '',
        placeholder: this.t('wm.filter.enter_keyword'),
      }
      return {...p, ...this.model }
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
      componentName: '',
    }
  },
  methods: {
    handleBlur() {
      if(this.oldValue !== this.value) {
        this.oldValue = this.value
        return this.$emit('change',{componentName: this.componentName, value: this.value});
      }
      this.$refs['input'].blur();
    },
    clear() {
      this.handleBlur();
    },
    search() {
      this.oldValue = this.value;
      return this.$emit('change',{componentName: this.componentName, value: this.value});
    },
    reset() {
      this.value="";
      return this.$emit('change',{componentName: this.componentName, value: this.value});
    }
  }
}
</script>