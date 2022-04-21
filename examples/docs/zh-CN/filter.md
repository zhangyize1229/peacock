## 高级查询

### 基础用法

:::demo

```html
<div style="width: 200px;">
  <wm-filter-option :model="input" @change="handleChange"></wm-filter-option>
</div>
<wm-filter-option :model="radio" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="select" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="datePicker" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="tabSelect" @change="handleChange"></wm-filter-option>
<script>
  export default {
    data() {
      return {
        input: {
          component: 'Input',
          componentName: 'input',
          defaultValue: 'hello'
        },
        radio: {
          component: 'Radio',
          componentName: 'radio',
          defaultValue: '为空',
          dic: []
        },
        select: {
          component: 'Select',
          componentName: 'select',
          dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
          defaultValue: ['0'],
        },
        datePicker: {
          component: 'DatePicker',
          componentName: 'datePicker',
          defaultValue : ['2022-04-07','2022-04-08']
        },
        tabSelect: {
          component: 'TabSelect',
          componentName: 'tabSelect',
          tabSelectSource: [{
            label: '员工1',
            value: 1,
            dic:[{label: 'zhangsan', value: '1',avatar: '',},{label: 'lisi', value: '2',avatar: ''}],
            defaultValue: ['1'],
          }, {
            label: '岗位1',
            value: 2,
            dic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}],
            defaultValue: ['1'],
          }],
        },
      };
    },
    methods: {
      handleChange(v) {
        console.log(v)
      }
    }
  }
</script>
```

:::

### group 模式

:::demo

```html
<wm-filter @change="handleChange">
  <wm-filter-option :model="input"></wm-filter-option>
  <wm-filter-option :model="input1"></wm-filter-option>
  <wm-filter-option :model="radio"></wm-filter-option>
  <wm-filter-option :model="select"></wm-filter-option>
  <wm-filter-option :model="datePicker"></wm-filter-option>
  <wm-filter-option :model="tabSelect"></wm-filter-option>
</wm-filter>
<script>
  export default {
    data() {
      return {
        input: {
          component: 'Input',
          componentName: 'input',
          defaultValue: 'hello'
        },
        input1: {
          component: 'Input',
          componentName: 'input1',
          defaultValue: 'hello1'
        },
        radio: {
          component: 'Radio',
          componentName: 'radio',
          defaultValue: '为空'
        },
        select: {
          component: 'Select',
          componentName: 'select',
          dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
          defaultValue: ['0'],
        },
        datePicker: {
          component: 'DatePicker',
          componentName: 'datePicker',
          defaultValue : ['2022-04-07','2022-04-08']
        },
        tabSelect: {
          component: 'TabSelect',
          componentName: 'tabSelect',
          tabSelectSource: [{
            label: '员工1',
            value: 1,
            dic:[{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
            defaultValue: ['1'],
          }, {
            label: '岗位1',
            value: 2,
            dic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}],
            defaultValue: ['1'],
          },{
            label: '测试',
            value: 3,
            dic: [{label: '测试1', value: '1'},{label: '测试2', value: '2'}],
            defaultValue: ['1'],
          }],
        },
      };
    },
    methods: {
      handleChange(v) {
        console.log(v)
      }
    }
  }
</script>
```

:::

### schema 模式

:::demo

```html
<wm-filter :schema="schema" @change="handleChange">
</wm-filter>
<script>
  export default {
    data() {
      return {
        schema: [
          {
            component: 'Input',
            componentName: 'input',
            defaultValue: 'hello'
          },
          {
            component: 'Radio',
            componentName: 'radio',
            defaultValue: '1'
          },
          {
            component: 'Select',
            componentName: 'select',
            dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
            defaultValue: ['0'],
          },
          {
            component: 'DatePicker',
            componentName: 'datePicker',
            defaultValue:['2022-04-07','2022-04-08']
          },
          {
            component: 'TabSelect',
            componentName: 'tabSelect',
            tabSelectSource: [{ 
                label: '员工1', 
                value: 1,
                dic:[{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
                defaultValue: ['1'],  
              }, {
                label: '岗位1',
                value: 2,
                dic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}],
                defaultValue: ['1'],
            }],
          }
        ]
      };
    },
    methods: {
      handleChange(val){
        console.log(val)
      }
    }
  }
</script>
```

:::

### wm-filter Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| schema | wm-filter  | array | -- | --

### wm-filter-option Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| model | wm-filter-option, 具体参数如下表  | object | -- | --

### model Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| component | 组件  | string | Input/Radio/Select/DatePicker/TabSelect | --
| componentName | 组件名称  | string | -- | --
| label | 标题  | string | -- | --
| defaultValue | 默认值  | string/array | input/radio为string  | --
| dic | 下拉数据 格式：{label:'', value:''} | array | --  | --
| tabSelectSource | 具体参数如下表 | array | --  | --

### tabSelectSource Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| label | Radio 的 label  | string | -- | --
| value | Radio 的 value  | string/number | --  | --
| dic | 下拉数据 格式：{label:'', value:'', avatar: ''} | array | --  | --


### wm-filter Event

| 方法名 | 说明 | 参数
|---------|--------|-------
| change | 参数 | --

### wm-filter-option Event

| 方法名 | 说明 | 参数
|---------|--------|-------
| change | 参数 | --
