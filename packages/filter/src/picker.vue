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
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :picker-options="pickerOptions">
    </el-date-picker>
    <div class="icon opt">
      <i v-if="value && value.length>0" class="el-icon-remove" @click.stop="reset"></i>
      <i v-else class="el-icon-error" @click.stop="()=>{}"></i>
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
          pleaseholder: '',
        }
      }
    }
  },
  data() {
    return {
      value: [],
      pickerOptions: {
        shortcuts: [{
          text: '今年至今',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近六个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  },
  watch: {
    'source.defaultValue': {
      handler(v) {
        this.value = v;
      },
      immediate: true
    },
  },
  methods: {
    reset() {
      this.value=[];
    },
  }
}
</script>