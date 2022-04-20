<template>
  <div class="filter-item filter-item-box" @click="()=>{$refs['datepicker'].focus()}">
    <div class="prefix">{{form.label}}</div>
    <el-date-picker
      ref="datepicker"
      class="filter-picker"
      v-model="value"
      clear-icon=""
      type="daterange"
      :editable="false"
      align="right"
      unlink-panels
      range-separator="-"
      value-format="yyyy-MM-dd"
      :start-placeholder="form.startPlaceholder"
      :end-placeholder="form.endPlaceholder"
      :picker-options="form.pickerOptions"
    />
    <div class="icons" v-if="value.length>0">
      <i class="el-icon-error icon opt" @click.stop="reset"></i>
    </div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default  {
  componentName: 'DatePicker',
  mixins: [Locale],
  props: {
    source: Object,
    // props: Object,
  },
  data() {
    return {
      value: [],
      componentName: ''
    }
  },
  computed: {
    form(){
      const p ={
        label: this.t('wm.filter.expected_time'),
        pickerOptions: {
          shortcuts: [{
            text: this.t('wm.filter.last_week'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: this.t('wm.filter.last_month'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: this.t('wm.filter.last_three_month'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        defaultValue: [],
        startPlaceholder: this.t('wm.filter.start_time'),
        endPlaceholder: this.t('wm.filter.end_time'),
      }
      return { ...p, ...this.source }
    },
    // formProps() {
    //   const p = {
    //     label: "label",
    //     pickerOptions: 'pickerOptions',
    //     startPlaceholder: 'startPlaceholder',
    //     endPlaceholder: 'endPlaceholder',
    //     defaultValue: 'defaultValue',
    //   }
    //   return {...p, ...this.props}
    // }
  },
  watch: {
    'form': {
      handler(v) {
        this.value = v.defaultValue;
        this.componentName = v.componentName;
      },
      immediate: true
    },
    value(v) {
      this.$emit('change',{componentName: this.componentName, value: v});
    }
  },
  methods: {
    reset() {
      this.value=[];
    },
  }
}
</script>