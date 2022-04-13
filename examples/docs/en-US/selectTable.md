## Select Table

:::demo

```html
<wmSelectTable :columns="columns" :tableData="tableData" :showField="'name'" :choosenData="choosenData" :type="radio" @selectVal="selectVal"></wmSelectTable>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      download(){
        return true;
      },
      upload(file){
        return true;
      }
    }
  }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| columns | 表格头部  | Array | 格式： [{title: '', dataIndex: '',width: '100px'}]
| tableData | 表格数据  | Array | 格式： [{id：'', name: ''}] id为必填
| type | 表格格式  | String | 格式： ridio 或者  checkbox  | raido为默认
| pageSize | 表格的每页数据  | Number | 格式： ridio 或者  checkbox  | 默认为5
| width | 组件的宽度  | String | 格式： '600px'   | 默认为'600px'
| showField | 输入框显示的字段名，如果为空，则全部显示  | String | 格式： 'width'   | 默认为''
| choosenData | 外层选中的数据回传  | Array | 格式： 同tableData  必传项为id，以及showField | 默认为[]
| placeholder | 组件的输入框的提示  | String | 格式： ''   | 默认为''
| showLabelName | input输入框是否显示表格的title名  | Boolean | 格式： true   | 默认为true