<template>
  <div class="filter-item">
    <el-popover
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover"
        trigger="click">
      <div slot="reference">
        <div class="filter-item-box" @click="showVisible" style="min-width: 130px;">
          <div class="prefix">{{source.label}}</div>
          <div class="inner">
            <div class="value">{{value}}</div>
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="icon">
            <i v-if="value" class="el-icon-remove" @click.stop="reset"></i>
            <i v-else class="el-icon-error" @click.stop="()=>{}"></i>
          </div>
        </div>
      </div>
      <date-range />
    </el-popover>
  </div>
</template>
<script>
import dateRange from "../../date-picker/panel/date-range"
export default  {
  components: { dateRange },
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
      value: '',
    }
  },
  watch: {
    'source.defaultValue': {
      handler(v) {
        console.log(v)
      },
      immediate: true
    },
  },
  methods: {
    showVisible() {
      console.log(111)
    },
    reset() {
      this.value='';
    },
    // handleChange(e) {
    //   console.log(e)
    // },
  }
}
</script>