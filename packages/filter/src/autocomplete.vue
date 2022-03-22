<template>
  <el-popover
    v-model="visible"
    :visible-arrow="false"
    placement="bottom-start"
    popper-class="vm-popover"
    trigger="manual">
    <div slot="reference">
      <div class="filter-item" v-if="visible==false"  @click="showVisible">
        <div class="prefix">{{source.label}}</div>
        <div class="inner">
          <div class="value">{{value}}</div>
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
      <div style="width: 160px;" v-if="visible==true">
        <el-input type="number" ref="input" :autofocus="true" :maxLength="source.maxlength" :min="source.min" v-model="value" @blur="()=>{visible=false}" />
      </div>
    </div>
    <div v-for="(item, index) in source.dic" :key="index" class="filter-option-item" @click="handleOption(item)">{{item}}</div>
  </el-popover>
</template>value
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
         }
       }
     }
   },
   data() {
     return {
       value: '所有',
       visible: false,
     }
   },
   methods: {
     showVisible() {
       this.visible = true;
       this.$nextTick(()=>{
         this.$refs.input.focus();
       })
     },
     handleOption(data) {
       this.value = data;
     }
   }
 }
</script>