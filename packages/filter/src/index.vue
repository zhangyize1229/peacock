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
          placeholder: '回车搜索规模',
          maxlength: 64,
          min: 0,
          dic: this.sizeMap,
          defaultValue: '',
        },
        status: {
          label: '状态',
          dic: this.statusMap,
          defaultValue: []
        }
      }
    },
    sizeMap: function (){
      return ['为空', '不为空']
    },
    statusMap: function () {
      return [{label: '规划中',value: '0'},{label: '开发中',value: '1'}]
    }
  },
  methods: {

  }
}
</script>