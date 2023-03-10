## filter

### base

:::demo

```html
<div style="width: 200px;">
  <wm-filter-option :model="input" @change="handleChange"></wm-filter-option>
</div>
<wm-filter-option :model="radio" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="select" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="datePicker" @change="handleChange"></wm-filter-option>
<wm-filter-option :model="dateTimePicker" @change="handleChange"></wm-filter-option>
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
        dateTimePicker: {
          component: 'DateTimePicker',
          componentName: 'dateTimePicker',
          defaultValue : ['2022-04-07 12:21:39','2022-04-08 12:22:40']
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

### group model

:::demo

```html
<wm-filter @change="handleChange">
  <wm-filter-option :model="input"></wm-filter-option>
  <wm-filter-option :model="input1"></wm-filter-option>
  <wm-filter-option :model="radio"></wm-filter-option>
  <wm-filter-option :model="select"></wm-filter-option>
  <wm-filter-option :model="datePicker"></wm-filter-option>
  <wm-filter-option :model="dateTimePicker" @change="handleChange"></wm-filter-option>
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
        dateTimePicker: {
          component: 'DateTimePicker',
          componentName: 'dateTimePicker',
          defaultValue : ['2022-04-07 12:21:39','2022-04-08 12:22:40']
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

### schema model

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
            component: 'DateTimePicker',
            componentName: 'dateTimePicker',
            defaultValue : ['2022-04-07 12:21:39','2022-04-08 12:22:40']
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

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| schema | wm-filter  | array | -- | --

### wm-filter-option Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| model | wm-filter-option, see the following table  | object | -- | --

### model Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| component | component  | string | Input/Radio/Select<br>DatePicker/DateTimePicker<br>TabSelect | --
| componentName | name  | string | -- | --
| label | --  | string | -- | --
| defaultValue | --  | string/array | Input/Radio string  | --
| dic | dropdown data Format：{label:'', value:''} | array | --  | --
| tabSelectSource | see the following table | array | --  | --

### tabSelectSource Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | Radio label  | string | -- | --
| value | Radio value  | string/number | --  | --
| dic | dropdown data  Format：{label:'', value:'', avatar: ''} | array | --  | --


### wm-filter Event

| Method | Description | Parameters
|---------|--------|-------
| change | params | --

### wm-filter-option Event

| Method | Description | Parameters
|---------|--------|-------
| change | params | --
