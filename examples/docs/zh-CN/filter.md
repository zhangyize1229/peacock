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
          defaultValue: ['0'],
        },
        picker: {
          defaultValue : ['2022-04-07','2022-04-08']
        },
        user: {
          userDic: [{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
          postDic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}],
          userDefaultValue: ['1'],
          postDefaultValue: ['1', '2'],
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
| size | 规模, 具体参数看下表size | object | -- | --
| status | 状态, 具体参数看下表status | object | -- | --
| picker | 时间, 具体参数看下表picker | object | -- | --
| user | 抄送人, 具体参数看下表user | object | -- | --
| sizeProps | 规模props, 具体参数看下表sizeProps | object | -- | --
| statusProps | 状态props, 具体参数看下表statusProps | object | -- | --
| pickerProps | 时间props, 具体参数看下表pickerProps | object | -- | --
| userProps | 抄送人props, 具体参数看下表userProps | object | -- | --

### size

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 标题 | string | -- | 规模
| placeholder | 输入框占位文本 | string | -- | 回车搜索规模
| maxlength | 原生属性，最大输入长度 | number | -- | 64
| min | 原生属性，设置最小值 | number | -- | 0
| dic | 下拉选项,具体属性看下表dicProps | array | -- | 为空,不为空
| defaultValue | 默认选中 | string | 为空 / 不为空 / number | --

### status

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 标题 | string | -- | 状态
| dic | 下拉选项,具体属性看下表dicProps | array | -- | --
| defaultValue | 默认选中 | string | -- | --

### picker

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 标题 | string | -- | 预计开始
| startPlaceholder | 输入框占位文本 | string | -- | 开始时间
| endPlaceholder | 输入框占位文本 | string | -- | 结束时间
| pickerOptions | 同 element DatePicker | array | -- | 最近一周,最近一个月,最近三个月
| defaultValue | 默认选中 | string | -- | --

### user

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 标题 | string | -- | 抄送人
| startPlaceholder | 输入框占位文本 | string | -- | 开始时间
| endPlaceholder | 输入框占位文本 | string | -- | 结束时间
| radioList | 选择 | array | -- | 员工, 岗位
| radioValue | 默认选中 | string | 员工, 岗位 | 员工
| userDic | 用户下拉选项,具体属性看下表dicProps | array | -- | --
| postDic | 岗位下拉选项,具体属性看下表dicProps | array | -- | --
| userDefaultValue | 用户下拉默认值 | array | -- | --
| postDefaultValue | 岗位下拉默认值 | array | -- | --


### sizeProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| placeholder | 指定为选项对象的某个属性值 |string |-- | 'placeholder'
| maxlength | 指定为选项对象的某个属性值 |number |-- | 'maxlength'
| min | 指定为选项对象的某个属性值 |number |-- | 'min'
| defaultValue | 指定为选项对象的某个属性值 |string |-- | 'defaultValue'
| dic | 指定为选项对象的某个属性值 |array | -- | 'dic'

### statusProps

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | 指定为选项对象的某个属性值 |string |-- | 'label'
| defaultValue | 指定为选项对象的某个属性值 |array |-- | 'defaultValue'
| dic | 指定为选项对象的某个属性值 |array | -- | 'dic'

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
| userDic | 指定为选项对象的某个属性值 |array |-- | 'userDic'
| postDic | 指定为选项对象的某个属性值 |array |-- | 'postDic'
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

### Methods

| 方法名 | 说明 | 参数
|---------|--------|-------
| search | 参数 | --
