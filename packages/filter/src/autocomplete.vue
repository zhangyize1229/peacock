<template>
  <div class="filter-item">
    <el-popover
        v-model="visible"
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover"
        trigger="manual">
      <div slot="reference">
        <div class="filter-item-box" v-if="visible==false"  @click="showVisible">
          <div class="prefix">{{form.label}}</div>
          <div class="inner">
            <template v-if="value">
              <div class="value">{{value}}</div>
              <i class="el-icon-error icon opt" @click.stop="reset"></i>
            </template>
            <template v-else>
              <div class="value placeholder">{{t("wm.filter.all")}}</div>
              <i class="el-icon-arrow-down icon"></i>
            </template>
          </div>
        </div>
        <div style="width: 160px;" v-if="visible==true">
          <el-input
            type="number"
            ref="input"
            :placeholder="form.placeholder"
            :maxLength="form.maxlength"
            :min="form.min"
            v-model="value"
            @blur="handleBlur"
            @keyup.enter.native="handleBlur"
          />
        </div>
      </div>
      <div>
        <div v-for="(item, index) in form.dic" :key="index" class="filter-option-item" @click="handleOption(item)">{{item}}</div>
      </div>
    </el-popover>
  </div>
</template>
<script>
 import Locale from "../../../src/mixins/locale";

 export default  {
   componentName: 'Radio',
   mixins: [Locale],
   props: {
     source: Object,
     // props: Object,
   },
   data() {
     return {
       visible: false,
       value: '',
       oldValue: '',
       componentName: '',
     }
   },
   computed: {
     form(){
       const p = {
         label: this.t('wm.filter.scale'),
         placeholder: this.t('wm.filter.enter_search_size'),
         maxlength: 64,
         min: 0,
         dic: [this.t('wm.filter.null'), this.t('wm.filter.not_null')],
       }
       return { ...p, ...this.source }
     },
     // formProps() {
     //   const p= {
     //     label: "label",
     //     placeholder: "placeholder",
     //     maxlength: "maxLength",
     //     min: 'min',
     //     dic: "dic",
     //     defaultValue: "defaultValue",
     //   }
     //   return { ...p, ...this.props }
     // }
   },
   watch: {
     'form': {
       handler(v) {
         this.value = v.defaultValue;
         this.componentName = v.componentName;
       },
       immediate: true,
       deep: true
     },
   },
   methods: {
     showVisible() {
       this.visible = true;
       this.$nextTick(()=>{
         this.$refs.input.focus();
       })
     },
     handleBlur() {
       this.visible = false;
       if(this.value >0 && this.oldValue !== this.value) {
         this.oldValue = this.value
         this.$emit('change',{componentName: this.componentName, value: this.value});
       }
     },
     handleOption(data) {
       this.value = data;
       this.$emit('change',{componentName: this.componentName, value: this.value});
     },
     reset() {
       this.value='';
       this.$emit('change',{componentName: this.componentName, value: ''});
     }
   }
 }
</script>