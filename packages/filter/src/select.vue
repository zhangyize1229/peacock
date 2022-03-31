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
          <div class="icon">
            <i v-if="value" class="el-icon-remove" @click.stop="reset"></i>
            <i v-else class="el-icon-error" @click.stop="()=>{}"></i>
          </div>
        </div>
      </div>
      <div>
        <div class="only-border-bottom">
          <el-input v-model="inputValue" @input="search">
            <template slot="prefix">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
        </div>
        <template v-if="checkedList.length>0">
          <div class="check-label">已选项</div>
          <el-checkbox-group v-model="checked" @change="handleChange" >
            <div v-for="(item, index) in checkedList" :key="index" class="filter-option-item">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </template>
        <div v-if="checkedList.length>0 && noCheckedList.length>0" class="divider" style="height: 1px;width: 100%;background-color: #DCDFE6;margin: 6px 0;"></div>
        <template v-if="noCheckedList.length>0">
          <el-checkbox-group v-model="checked" @change="handleChange" >
            <div v-for="(item, index) in noCheckedList" :key="index" class="filter-option-item">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </template>
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
      checked: [],
      inputValue: '',
      checkedList: [],
      noCheckedList: []
    }
  },
  watch: {
    'source.defaultValue': {
      handler(v) {
        if(this.source.dic && this.source.dic.length) {
          this.checked = v;
          this.handleChange(v);
        }
      },
      immediate: true
    }
  },
  methods: {
    showVisible() {
      this.inputValue = '';
      this.handleChange();
    },
    handleChange() {
      let checkedList = [];
      let noCheckedList = [];
      if(!this.checked) {
        return this.noCheckedList = this.filterByInput(this.source.dic);
      }
      this.source.dic.map(v=>{
        if(this.checked.indexOf(v.value)!==-1) {
          checkedList = checkedList.concat([v])
        } else {
          noCheckedList = noCheckedList.concat([v])
        }
      })
      this.checkedList = this.filterByInput(checkedList);
      this.noCheckedList = this.filterByInput(noCheckedList);
      this.value = checkedList.length>0?checkedList.map(v=>v.label).join(',') : '';
    },
    filterByInput(arr, key='label'){
      if(!this.inputValue) {
        return arr;
      } else {
        return arr.filter(v=>v[key].includes(this.inputValue));
      }
    },
    search() {
      this.handleChange();
    },
    reset() {
      this.value='';
      this.checked= [];
      this.handleChange();
    }
  }
}
</script>