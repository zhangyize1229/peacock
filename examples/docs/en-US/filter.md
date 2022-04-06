## 高级查询

:::demo

```html
<wm-filter 
  :size="size" 
  :status="status" 
  :user="user"
  :picker="picker"
  @search ="getValue"
/>
<script>
  export default {
    data() {
      return {
        size: {
          defaultValue: '为空'
        },
        status: {
          dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
          defaultValue: [],
        },
        picker: {},
        user: {
          userDic: [{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
          postDic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}],
          userDefaultValue: [],
          postDefaultValue: [],
          radioList: [{label: '员工1', value: 1}, {label: '岗位1', value: 2}],
          radioValue: 1,
        },
      };
    },
    methods: {
      getValue(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| size | 规模, 具体参数看下表sizeProps | object | -- | --
| status | 状态, 具体参数看下表statusProps | object | -- | --
| picker | 时间, 具体参数看下表pickerProps | object | -- | --
| user | 抄送人, 具体参数看下表userProps | object | -- | --


### sizeProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| placeholder | 指定为选项对象的某个属性值 |string |-- | 'placeholder'
| maxlength | 指定为选项对象的某个属性值 |number |-- | 'maxlength'
| min | 指定为选项对象的某个属性值 |number |-- | 'min'
| defaultValue | 指定为选项对象的某个属性值 |string |-- | 'defaultValue'
| dic | 指定为选项对象的某个属性值,具体属性看下表dicProps |array | -- | 'dic'

### statusProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| defaultValue | 指定为选项对象的某个属性值 |array |-- | 'defaultValue'
| dic | 指定为选项对象的某个属性值,具体属性看下表dicProps |array | -- | 'dic'

### pickerProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| pickOptions | 指定为选项对象的某个属性值 |array |-- | 'pickOptions'
| defaultValue | 指定为选项对象的某个属性值 |array |-- | 'defaultValue'
| startPlaceholder | 指定为选项对象的某个属性值 |string |-- | 'startPlaceholder'
| endPlaceholder | 指定为选项对象的某个属性值 |string |-- | 'endPlaceholder'

### userProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| userDic | 指定为选项对象的某个属性值,具体属性看下表dicProps |array |-- | 'userDic'
| postDic | 指定为选项对象的某个属性值,具体属性看下表dicProps |array |-- | 'postDic'
| userDefaultValue | 指定为选项对象的某个属性值 |array |-- | 'userDefaultValue'
| postDefaultValue | 指定为选项对象的某个属性值 |array |-- | 'postDefaultValue'
| radioList | 指定为选项对象的某个属性值 |array |-- | 'radioList'
| radioValue | 指定为选项对象的某个属性值 | string / number |-- | 'radioValue'

### dicProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| avatar | 指定为选项对象的某个属性值 |string |-- | 'avatar'
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| value | 指定为选项对象的某个属性值 |string | -- | 'value'

