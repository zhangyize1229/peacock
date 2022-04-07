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
          <div class="prefix">{{source.label}}</div>
          <div class="inner">
            <div v-if="value" class="value">{{value}}</div>
            <div v-else class="value placeholder">{{placeholder}}</div>
            <i class="el-icon-arrow-down icon"></i>
          </div>
          <div class="icon opt">
            <i v-if="value" class="el-icon-remove" @click.stop="()=>{value='';$emit('getValue',{type: 'size', value: ''});}"></i>
<!--            <i v-else class="el-icon-error" @click.stop="()=>{}"></i>-->
          </div>
        </div>
        <div style="width: 160px;" v-if="visible==true">
          <el-input
            type="number"
            ref="input"
            :placeholder="source.placeholder"
            :maxLength="source.maxlength"
            :min="source.min"
            v-model="value"
            @blur="handleBlur"
            @keyup.enter.native="handleBlur"
          />
        </div>
      </div>
      <div>
        <div v-for="(item, index) in source.dic" :key="index" class="filter-option-item" @click="handleOption(item)">{{item}}</div>
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
           dic: [],
           label: '',
           placeholder: '',
           maxlength: 64,
           min: 0,
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
       visible: false,
       value: '',
       oldValue: '',
     }
   },
   methods: {
     showVisible() {
       this.visible = true;
       this.$nextTick(()=>{
         this.$refs.input.focus();
       })
     },
     handleBlur({target: {value}}) {
       this.visible = false;
       if(value && value>=0 && this.oldValue !== value) {
         this.value = value;
         this.oldValue = value
         this.$emit('getValue',{type: 'size', value: this.value});
       }
     },
     handleOption(data) {
       this.value = data;
       this.$emit('getValue',{type: 'size', value: this.value});
     }
   }
 }
</script>