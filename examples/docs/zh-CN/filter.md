## 高级查询

### 基础用法

:::demo

```html
<div style="width: 200px;">
  <wm-filter-option :source="search" @change="handleChange"></wm-filter-option>
</div>
<wm-filter-option :source="size" @change="handleChange"></wm-filter-option>
<wm-filter-option :source="status" @change="handleChange"></wm-filter-option>
<wm-filter-option :source="picker" @change="handleChange"></wm-filter-option>
<wm-filter-option :source="user" @change="handleChange"></wm-filter-option>
<script>
  export default {
    data() {
      return {
        search: {
          component: 'search',
          defaultValue: 'hello'
        },
        size: {
          component: 'size',
          defaultValue: '为空'
        },
        status: {
          component: 'status',
          dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
          defaultValue: ['0'],
        },
        picker: {
          component: 'picker',
          defaultValue : ['2022-04-07','2022-04-08']
        },
        user: {
          component: 'user',
          radioList: [{
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
  <wm-filter-option :source="search"></wm-filter-option>
  <wm-filter-option :source="size"></wm-filter-option>
  <wm-filter-option :source="status"></wm-filter-option>
  <wm-filter-option :source="picker"></wm-filter-option>
  <wm-filter-option :source="user"></wm-filter-option>
</wm-filter>
<script>
  export default {
    data() {
      return {
        search: {
          component: 'search',
          defaultValue: 'hello'
        },
        size: {
          component: 'size',
          defaultValue: '为空'
        },
        status: {
          component: 'status',
          dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
          defaultValue: ['0'],
        },
        picker: {
          component: 'picker',
          defaultValue : ['2022-04-07','2022-04-08']
        },
        user: {
          component: 'user',
          radioList: [{
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
            component: 'search',
            defaultValue: 'hello'
          },
          {
            component: 'size',
            defaultValue: '1'
          },
          {
            component: 'status',
            dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}],
            defaultValue: ['0'],
          },
          {
            component: 'picker',
            defaultValue:['2022-04-07','2022-04-08']
          },
          {
            component: 'user',
            radioList: [{ 
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
          // console.log(val)
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
| source | wm-filter-option, 具体参数如下表  | object | -- | --

### source Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| component | 组件  | string | search/size/status/picker/user | --
| label | 标题  | string | -- | --
| defaultValue | 默认值  | string/array | search/size为string  | --
| dic | 下拉数据 格式：{label:'', value:''} | array | --  | --
| radioList | 具体参数如下表 | array | --  | --

### radioList Attributes

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
