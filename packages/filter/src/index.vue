<template>
  <div class="wm-filter">
    <Autocomplete :source="base.size" />
    <Checkbox :source="base.status" />
    <Picker :source="base.picker" />
    <Select :source="base.user" />
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Autocomplete from "./autocomplete";
import Checkbox from "./checkbox";
import Picker from "./picker"
import Select from "./select"
export default {
  name: "WmFilter",
  mixins: [Locale],
  components: { Autocomplete, Checkbox, Picker, Select },
  props: {
    size: Object,
    status: Object,
    picker: Object,
    user: Object,
    props: {
      type: Object,
      default: ()=>{
        return {
          label: "label",
          placeholder: "placeholder",
          maxlength: "maxLength",
          min: 'min',
          dic: "dic",
          defaultValue: "defaultValue",

          userDic: "userDic",
          postDic: "postDic",
          userDefaultValue: "userDefaultValue",
          postDefaultValue: "postDefaultValue",
          radioList: "radioList",
          radioValue: "radioValue",
        }
      }
    },
    dicProps: {
      type: Object,
      default: () => {
        return {
          avatar: "avatar",
          label: "label",
          value: "value"
        }
      }
    }
  },
  computed: {
    base: function () {
      const size = {
        label: '规模',
        placeholder: '回车搜索规模',
        maxlength: 64,
        min: 0,
        dic: ['为空', '不为空'],
        defaultValue: '',
      }
      const status= {
        label: '状态',
        dic: [1,2,3],
        defaultValue: []
      }
      const picker = {
        label: '预计开始',
        defaultValue: [],
      }
      const user = {
        label: '抄送人',
        userDic: [],
        postDic: [],
        userDefaultValue: [],
        postDefaultValue: [],
        radioList: [{label: '员工', value: 'user'}, {label: '岗位', value: 'post'}],
        radioValue: 'user',
      }
      return {
        size: this.handleProp(size,'size',this.props),
        status: this.handleProp(status,'status',this.props),
        picker: this.handleProp(picker, 'picker',this.props),
        user: this.handleProp(user, 'user',this.props)
      }
    }
  },
  methods: {
    handleProp(defaultData, attr, props) {
      if(defaultData instanceof Object) {
        let obj = {};
        Object.keys(defaultData).forEach(k=>{
          if(this[attr] && this[attr][props[k]]) {
            obj[props[k]] = this[attr][props[k]]
          }
        });
        return {...defaultData, ...obj};
      }
    }
  }
}
</script>