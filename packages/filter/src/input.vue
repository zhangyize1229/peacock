<template>
  <div class="filter-item input">
    <el-input
      ref="input"
      :placeholder="source.placeholder"
      :maxLength="source.maxlength"
      v-model="value"
      prefix-icon="el-icon-search"
      clearable
      @blur="handleBlur"
      @keyup.enter.native="handleBlur"
    />
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
    handleBlur({target: {value}}) {
      if(value && value>=0 && this.oldValue !== value) {
        this.value = value;
        this.oldValue = value
        this.$emit('getValue',{type: 'search', value: this.value});
      }
      this.$refs['input'].blur();
    }
  }
}
</script>