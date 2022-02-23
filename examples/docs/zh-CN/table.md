## table


:::demo

```html
<wm-table :data="data" :columns="columns" pagination-type="client"></wm-table>
<script>
  export default {
      data() {
        return {
          columns: [
            {prop: 'date',label: '日期'},
            {prop: 'name',label: '姓名'},
            {prop: 'address',label: '地址'}
          ],
          data:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
</script>

```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| columns | 表格列对象参数 | Array | 
| query | 表格查询参数 | Object |  | {}
| limit | 每页显示的数量 | number |    | 10
| sort | 首次查询的排序参数名称 | String | | 
| labelWidth |表单域标签的宽度| String | -- | 80px
| asc | 首次查询时候的排序参数方式 | Boolean | -- | false
| name | breadcrumb面包屑第一个文字说明 | String | -- | 
| enter | 是否可以使用回车提交表单 | boolean | -- | false
