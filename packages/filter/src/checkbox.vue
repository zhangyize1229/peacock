<template>
  <div class="filter-item">
    <el-popover
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover"
        @hide="hide"
        trigger="click">
      <div slot="reference">
        <div class="filter-item-box" @click="showVisible">
          <div class="prefix">{{form.label}}</div>
          <div class="inner">
            <template v-if="value && value.length>0">
              <div class="value">{{str}}</div>
              <i class="el-icon-error icon opt" @click.stop="reset"></i>
            </template>
            <template v-else>
              <div class="value placeholder">{{t("wm.filter.all")}}</div>
              <i class="el-icon-arrow-down icon"></i>
            </template>
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
          <el-checkbox-group class="popover-options" v-model="value" @change="handleChange" >
            <div v-for="(item, index) in checkedList" :key="index" class="filter-option-item">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </template>
        <div v-if="checkedList.length>0 && noCheckedList.length>0" class="divider"></div>
        <template v-if="noCheckedList.length>0">
          <el-checkbox-group v-model="value" @change="handleChange" >
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
import Locale from "../../../src/mixins/locale";

export default  {
  componentName: 'Select',
  mixins: [Locale],
  props: {
    model: Object,
    // props: Object
  },
  data() {
    return {
      str: '',
      value: [],
      inputValue: '',
      checkedList: [],
      noCheckedList: [],
      old: [],
      componentName: ''
    }
  },
  computed: {
    form(){
      const p = {
        label: this.t('wm.filter.status'),
      }
      return { ...p, ...this.model }
    },
    // formProps(){
    //   const p= {
    //     label: "label",
    //     dic: "dic",
    //     defaultValue: "defaultValue",
    //   }
    //   return { ...p, ...this.props }
    // }
  },
  watch: {
    form: {
      handler(v) {
        if( v.defaultValue && v.dic && v.dic.length) {
          this.value = this.old = v.defaultValue;
          this.componentName = v.componentName;
          this.handleChange(v.defaultValue);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    showVisible() {
      this.inputValue = '';
      this.handleChange();
    },
    hide() {
      if(this.old.toString() !== this.value.toString()) {
        this.old = this.value;
        this.$emit('change', {componentName: this.componentName, value: this.value })
      }
    },
    handleChange() {
      let checkedList = [];
      let noCheckedList = [];
      if(!this.value) {
        return this.noCheckedList = this.filterByInput(this.model.dic);
      }
      this.model.dic.map(v=>{
        if(this.value.indexOf(v.value)!==-1) {
          checkedList = checkedList.concat([v])
        } else {
          noCheckedList = noCheckedList.concat([v])
        }
      })
      this.checkedList = this.filterByInput(checkedList);
      this.noCheckedList = this.filterByInput(noCheckedList);
      this.str = checkedList.length>0?checkedList.map(v=>v.label).join(';') : '';
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
      this.str='';
      this.value= [];
      this.handleChange();
      this.hide();
    }
  }
}
</script>