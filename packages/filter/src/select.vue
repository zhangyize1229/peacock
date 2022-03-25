<template>
  <div class="filter-item">
    <el-popover
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover"
        trigger="click">
      <div slot="reference">
        <div class="filter-item-box" @click="showVisible">
          <div class="prefix">{{source.label}}</div>
          <div class="inner">
            <div class="value">{{value}}</div>
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
      </div>
      <div>
        <div class="only-border-bottom fix-center">
          <i class="el-icon-search" style="font-size: 20px;"></i>
          <el-input />
        </div>
        <el-checkbox-group v-model="checked" @change="handleChange" >
          <div v-for="(item, index) in source.dic" :key="index" class="filter-option-item">
            <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </el-popover>
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
          dic: [],
          defaultValue: []
        }
      }
    }
  },
  data() {
    return {
      value: '',
      checked: []
    }
  },
  watch: {
    'source.defaultValue': {
      handler(v) {
        this.checked = v;
        this.handleChange(v)
      },
      immediate: true
    }
  },
  methods: {
    showVisible() {
      this.visible = true;
    },
    handleChange(e) {
      const data = this.getIntersection(this.source.dic,e);
      this.value = data && data.length ? data.map(v=>v.label).join(',') : '';
    },
    getIntersection(arr1, arr2) {
      return arr1.filter(v=> arr2.indexOf(v.value) !== -1)
    }
  }
}
</script>