## filter

### base

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

### group model

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
| source | wm-filter-option, see the following table  | object | -- | --

### source Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| component | component  | string | search/size/status/picker/user | --
| label | --  | string | -- | --
| defaultValue | --  | string/array | search/size为string  | --
| dic | dropdown data Format：{label:'', value:''} | array | --  | --
| radioList | see the following table | array | --  | --

### radioList Attributes

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
