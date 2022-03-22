<template>
  <div class="wm-filter">
    <Autocomplete :source="base.size" />
    <Select :source="base.status" />
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Autocomplete from "./autocomplete";
import Select from "./select"
export default {
  name: "WmFilter",
  mixins: [Locale],
  components: {Autocomplete, Select},
  props: {

  },
  data(){
    return{

    }
  },
  computed: {
    base: function () {
      return {
        size: {
          label: '规模',
          maxlength: 64,
          min: 0,
          dic: this.sizeMap
        },
        status: {
          label: '状态状态',
          placeholder: '所有',
          dic: this.statusMap
        }
      }
    },
    sizeMap: function (){
      return ['为空', '不为空']
    },
    statusMap: function () {
      return []
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
  .wm-filter{
    width: 100%;
    font-size: 12px;
    .filter-item{
      display: inline-flex;
      align-items: center;
      border: 1px solid #409eff;
      min-width: 105px;
      max-width: 360px;
      padding: 0 10px;
      box-sizing: border-box;
      height: 26px;
      line-height: 26px;
      cursor: pointer;
      .prefix{
        color: #409eff;
      }
      .inner{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        .value{
          flex: 1;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow-x: hidden;
          padding: 0 10px;
        }
      }
    }
    @at-root .vm-popover{
      padding: 10px 0!important;
      .filter-option-item {
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        cursor: pointer;
        padding-left: 8px;
        &:hover{
          color: #409eff;
          background-color: #f5f7fa;
        }
      }
    }
  }
</style>