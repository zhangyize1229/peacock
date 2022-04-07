<template>
  <div class="filter-item input">
    <el-input
      ref="input"
      :placeholder="source.placeholder"
      :maxLength="source.maxlength"
      v-model="value"
      clearable
      @clear="clear"
      @blur="handleBlur"
      @keyup.enter.native="handleBlur"
    />
    <div class="search" @mousedown="search($event)"><i class="el-icon-search"></i></div>
  </div>
</template>
<script>
export default  {
  props: {
    source: {
      type: Object,
      default: () => {
        return {
          placeholder: '',
          maxlength: 64,
          defaultValue: '',
        }
      }
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  watch: {
    'source.defaultValue': {
      handler(newValue) {
        this.value = newValue
      },
      immediate: true
    },
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
        return this.$emit('getValue',{type: 'search', value: this.value});
      }
      this.$refs['input'].blur();
    },
    clear() {
      this.handleBlur();
    },
    search(event) {
      this.oldValue = this.value;
      return this.$emit('getValue',{type: 'search', value: this.value});
    },
  }
}
</script>