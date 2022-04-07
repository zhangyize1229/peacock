<template>
  <div class="wm-filter">
    <Input :source="base.search" @getValue="getValue" />
    <Autocomplete :source="base.size" :placeholder="placeholder" @getValue="getValue" />
    <Checkbox :source="base.status" :placeholder="placeholder" @getValue="getValue" />
    <Picker :source="base.picker" @getValue="getValue" />
    <Select :source="base.user" :placeholder="placeholder" @getValue="getValue" />
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Input from "./input"
import Autocomplete from "./autocomplete";
import Checkbox from "./checkbox";
import Picker from "./picker"
import Select from "./select"
export default {
  name: "WmFilter",
  mixins: [Locale],
  components: {
    Input,
    Autocomplete,
    Checkbox,
    Picker,
    Select
  },
  props: {
    search: Object,
    size: Object,
    status: Object,
    picker: Object,
    user: Object,

    searchProps: Object,
    sizeProps: Object,
    statusProps: Object,
    pickerProps: Object,
    ccProps: Object,
    dicProps: Object,
  },
  computed: {
    placeholder: function () {
      return this.t("wm.filter.all")
    },
    cSearchProps: function () {
      const p = {
        placeholder: "placeholder",
        maxlength: "maxLength",
        defaultValue: "defaultValue",
      }
      return {...p, ...this.sizeProps}
    },
    cSizeProps: function () {
      const p= {
        label: "label",
        placeholder: "placeholder",
        maxlength: "maxLength",
        min: 'min',
        dic: "dic",
        defaultValue: "defaultValue",
      }
      return {...p, ...this.sizeProps}
    },
    cStatusProps: function () {
      const p= {
        label: "label",
        dic: "dic",
        defaultValue: "defaultValue",
      }
      return {...p, ...this.statusProps}
    },
    cPickerProps: function () {
      const p = {
        label: "label",
        pickerOptions: 'pickerOptions',
        startPlaceholder: 'startPlaceholder',
        endPlaceholder: 'endPlaceholder',
        defaultValue: 'defaultValue',
      }
      return {...p, ...this.pickerProps}
    },
    ccPersonProps: function () {
      const p = {
        label: "label",
        userDic: "userDic",
        postDic: "postDic",
        userDefaultValue: "userDefaultValue",
        postDefaultValue: "postDefaultValue",
        radioList: "radioList",
        radioValue: "radioValue",
      }
      return {...p, ...this.ccProps}
    },
    cDicProps: function () {
      const p = {
        avatar: "avatar",
        label: "label",
        value: "value"
      }
      return {...p, ...this.dicProps}
    },
    base: function () {
      const search = {
        placeholder: '输入标题关键字',
        maxlength: 64,
        defaultValue: '',
      }
      const size = {
        label: this.t('wm.filter.scale'),
        placeholder: this.t('wm.filter.enter_search_size'),
        maxlength: 64,
        min: 0,
        dic: [this.t('wm.filter.null'), this.t('wm.filter.not_null')],
        defaultValue: '',
      }
      const status= {
        label: this.t('wm.filter.status'),
        dic: [],
        defaultValue: []
      }
      const picker = {
        label: this.t('wm.filter.expected_time'),
        pickerOptions: {
          shortcuts: [{
            text: this.t('wm.filter.last_week'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: this.t('wm.filter.last_month'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: this.t('wm.filter.last_three_month'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        defaultValue: [],
        startPlaceholder: this.t('wm.filter.start_time'),
        endPlaceholder: this.t('wm.filter.end_time'),
      }
      const user = {
        label: this.t('wm.filter.cc_person'),
        userDic: [],
        postDic: [],
        userDefaultValue: [],
        postDefaultValue: [],
        radioList: [
          {label: this.t('wm.filter.person'), value: 'user'},
          {label: this.t('wm.filter.post'), value: 'post'}
        ],
        radioValue: 'user',
      }
      return {
        search: this.handleProp(search, this.search, this.cSearchProps),
        size: this.handleProp(size, this.size, this.cSizeProps),
        status: this.handleProp(status, this.status, this.cStatusProps),
        picker: this.handleProp(picker, this.picker, this.cPickerProps),
        user: this.handleProp(user, this.user, this.ccPersonProps)
      }
    }
  },
  data() {
    return {
      values : {search: '',size: '', status: [], picker: [], user: {userChecked: [], postChecked: []}}
    }
  },
  methods: {
    handleProp(defaultData, attr, props) {
      let obj = {};
      if(defaultData instanceof Object) {
        Object.keys(defaultData).forEach(k=>{
          if(attr && attr[[props[k]]]) {
            const value = attr[[props[k]]]
            if(value instanceof Array) {
              let arr = [];
              for(let i =0; i<value.length; i ++) {
                if(value[i] instanceof Object) {
                  const data = this.handleProp(this.cDicProps, value[i], this.cDicProps);
                  arr.push(data)
                } else {
                  arr.push(value[i]);
                }
              }
              obj[k] = arr;
            } else {
              obj[k] = value;
            }
          }
        });
      }
      return {...defaultData, ...obj};
    },
    getValue({type, value}) {
      this.values[type] = value;
      this.$emit('search', this.values)
    }
  }
}
</script>