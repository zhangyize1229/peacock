<template>
  <div class="filter-item filter-item-box" style="min-width: 130px;">
    <div class="prefix">{{source.label}}</div>
    <el-date-picker
      class="filter-picker"
      v-model="value"
      clear-icon=""
      type="daterange"
      :editable="false"
      align="right"
      unlink-panels
      range-separator="-"
      value-format="YYYY-MM-dd"
      :start-placeholder="source.startPlaceholder"
      :end-placeholder="source.endPlaceholder"
      :picker-options="source.pickerOptions"
    />
    <div class="icon opt">
      <i v-if="value && value.length>0" class="el-icon-remove" @click.stop="reset"></i>
<!--      <i v-else class="el-icon-error" @click.stop="()=>{}"></i>-->
    </div>
  </div>
</template>
<script>
export default  {
  props: {
    source: {
      type: Object,
      default: () => {
        return {
          label: '',
          defaultValue: [],
          startPlaceholder: '',
          endPlaceholder: '',
          pickerOptions: {}
        }
      }
    }
  },
  data() {
    return {
      value: [],
    }
  },
  watch: {
    'source.defaultValue': {
      handler(v) {
        this.value = v;
      },
      immediate: true
    },
    value(v) {
      this.$emit('getValue',{type: 'picker', value: v});
    }
  },
  methods: {
    reset() {
      this.value=[];
    },
  }
}
</script>