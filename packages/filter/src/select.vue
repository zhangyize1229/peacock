<template>
  <div class="filter-item">
    <el-popover
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover popper-width"
        @hide="hide"
        trigger="click">
      <div slot="reference">
        <div class="filter-item-box">
          <div class="prefix">{{form.label}}</div>
          <div class="inner">
            <template v-if="str">
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
        <div class="filter-radio">
          <el-radio-group v-model="radio">
            <el-radio v-for="(item,index) in form.tabSelectSource" :key="index" :label="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </div>
        <div class="divider"></div>
        <div v-for="(item, index) in form.tabSelectSource" :key="index">
          <template v-if="item.value === radio">
            <el-checkbox-group class="popover-options" v-model="value[item.value]">
              <div v-for="(i, j) in item.dic" :key="j" class="filter-option-item user">
                <el-checkbox :label="i.value">
                  <div style="display: flex;align-items: center;">
                    <Avatar v-if="i.hasOwnProperty('avatar')" :width="30" class="avatar" :src="i.avatar" fit="contain" :hide-btn="true" />
                    <div class="name">{{i.label}}</div>
                  </div>
                </el-checkbox>
              </div>
            </el-checkbox-group>
          </template>
        </div>
      </div>
    </el-popover>
  </div>
</template>
<script>
import Avatar from "../../avatar/index"
import Locale from "../../../src/mixins/locale";
import {deepClone} from "../../../src/utils/utils";
export default  {
  componentName: 'TabSelect',
  mixins: [Locale],
  props: {
    model: Object,
    // props: Object,
  },
  components: { Avatar },
  data() {
    return {
      radio: '',
      form: {
        tabSelectSource: []
      },
      value: {},
      componentName: '',
    }
  },
  computed: {
    str(){
      const val = Object.values(this.value);
      if(val.length){
        const arr =this.form.tabSelectSource.map(v=>v.dic.flatMap(i=>this.value[v.value].includes(i.value)?[i.label] : []));
        const flat = arr.flat();
        return  flat && flat.length>0?flat.join(';') : '';
      }else{
        return  '';
      }
    },
    // formProps() {
    //   const p = {
    //     label: "label",
    //     userDic: "userDic",
    //     postDic: "postDic",
    //     userDefaultValue: "userDefaultValue",
    //     postDefaultValue: "postDefaultValue",
    //     tabSelectSource: "tabSelectSource",
    //     radioValue: "radioValue",
    //   }
    //   return {...p, ...this.props}
    // }
  },
  watch: {
    model:{
      handler(v){
        const p = {
          label: this.t('wm.filter.cc_person'),
        }
        const data = {...deepClone(v), ...p}
        this.radio = data.tabSelectSource[0].value;
        let checked = {};
        data.tabSelectSource.forEach(v=>{
          checked[v.value]=(v.defaultValue);
        })
        this.form = data;
        this.value = checked;
        this.componentName = v.componentName;
      },
      deep: true,
      immediate:true
    }
  },
  methods: {
    hide() {
      const newArr = Object.values(this.value);
      const { tabSelectSource } = this.form;
      const oldArr = tabSelectSource.map(v=>v.defaultValue);
      if(newArr.toString() !== oldArr.toString()) {
        this.$emit('change', {componentName:this.componentName, value:this.value})
        this.form.tabSelectSource.forEach(v=>v.defaultValue = this.value[v.value])
      }
    },
    reset() {
      this.resetObj();
      this.hide();
    },
    resetObj() {
      Object.keys(this.value).forEach(v=>{
        this.value[v] = []
      });
    }
  }
}
</script>