## 表格


:::demo

```html
<template>
    <div style="height: 300px;">
        <el-button  @click="handleAdd" :disabled="editRow">新增</el-button>
        <wm-table ref="table" :data="data" :columns="columns" pagination-type="client" :edit-row="editRow" :rules="dataRule">

            <template #name="{scope, iscell}">

                <el-form-item v-if="iscell" prop="name" required >
                    <el-input v-model="scope.row.name" ></el-input>
                </el-form-item>
                <span v-else>{{scope.row.name}}</span>

            </template>


            <template #date="{scope, iscell}">

                <el-form-item v-if="iscell" prop="date" required>
                    <el-date-picker v-model="scope.row.date" type="date" placeholder="选择日期时间" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <span v-else>{{scope.row.date}}</span>
            </template>


            <template #address="{scope, iscell}">

                <el-form-item v-if="iscell" prop="address" required>
                    <el-input v-model="scope.row.address" ></el-input>
                </el-form-item>
                <span v-else>{{scope.row.address}}</span>

            </template>            


            <template #header="{scope, iscell}">
                <div v-if="iscell">
                    <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
                    <el-button type="text" @click="handleCancel(scope.row)">取消</el-button>
                </div>
                <div v-else>
                    <el-button type="text" :disabled="editRow!=null" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button type="text" :disabled="editRow!=null" @click="handleDelete(scope.row)">删除</el-button>
                </div>
            </template>


        </wm-table>
    </div>

</template>
<script>
    const data = [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
    }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
    }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
    }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]

    export default {
        created(){
            this.data = data
        },
        methods: {
            handleCancel(row){
                
                if(row.add === true){
                    this.$refs.table.content.shift();
                }
                this.editRow = null;
            },
            handleAdd(){
                this.editRow = {add: true};
                this.$refs.table.content.unshift(this.editRow)
            },
            handleEdit(row){
                this.editRow = row;
            },
            handleDelete(row){
                this.$message.warning("删除"+JSON.stringify(row))
            },
            handleSave(){
                this.$refs.table.getTableForm().validate(valid=> {
                    if(valid){
                        this.$message.success("upload");
                        this.editRow = null;
                    }
                })
            },

        },
        data() {
            return {
                dataRule: {
                    name: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }]
                },
                editRow: null,
                columns: [
                    {type: 'index',label: '序号'},
                    {prop: 'header',label: '操作'},
                    {prop: 'date',label: '时间', sortable: true, width: '300px'},
                    {prop: 'name',label: '姓名', sortable: true},
                    {prop: 'address',label: '地址', sortable: true, formatter: row=> <el-tag>{row.address}</el-tag>},
                ],
                data: []
            }
        }
    }
</script>

```

:::


### Attributes

#### 常用props
|参数|说明|类型|默认值|可选值|
|---------|--------|-------| --------|--------
|columns|表格列对象参数|array||
|query|表格查询参数|object|-|
|limit|每页显示的数量|number|10|
|sort|首次查询的排序参数名称|string|-|
|asc|首次查询时候的排序参数方式|boolean|false|
|custRequest|自定义返回查询接口。|Function(params)/Promise||
|method|接口请求的默认方法|string|post|post/get
|layout|底部分页样式（同element Pagination的layout）|string|total, sizes, prev, pager, next, jumper|
|auto|首次加载是否自动触发查询，设置false需要手动触发 :this.$refs.table.findPage()|boolean|true|
|editRow|table页面采用行编辑保存时传入行编辑的数据|object|-|
|rules|行编辑时的校验规则（elementui写法）|object|-|
|data|使用传入data渲染表格|array|-|
|其他|其他所有el-table原生属性|-|-|

#### 其他props
|参数|说明|类型|默认值|可选值
|---------|--------|-------| --------|--------
|url|数据请求地址|string|-|
|paginationType|分页方式，
|分页接口page则填写server
|list接口则填写client|string|server|server/client
|showAll|请求list接口表单是否显示所有数据，不进行前端分页|boolean|false|
|autoScroll|底部切换分页时是否自动回到顶部|boolean|true|
|underline|排序参数是否需要转换为下划线提交到后台|boolean|true|
|pageSizes|自定义页码|array|全局配置或[10, 20, 30, 50]|
|overflow|内容过长时是否折叠table为一行，选中则展开当前行|boolean|false|
|stripe|是否为斑马纹 table【原生属性】|boolean|true|
|border|是否带有纵向边框【element】|boolean|true|


### Events
|方法名    |说明 |参数
|-------|-------|--------
|cell-click|    element当某个单元格被点击时会触发该事件 |row, column, cell, event
|selection-change   |elemnt当选择项发生变化时会触发该事件  |selection
|current-change |element当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性|  currentRow, oldCurrentRow
|after  |每次请求数据后的回调方法，在里面可以拿到数据对行数据包装处理等。|  Page: {page: 1, //页码 limit: this.limit, //每页数量 total: 0, //服务端返回的总数量 sort: null, asc: null, }, 或者 List: [Row,Row]
|on-refresh |当点击工具栏刷新当前数据时触发    |
|select |element当用户手动勾选数据行的 Checkbox 时触发的事件 |
|其他element |table事件 |

### methods
|方法名|   说明 | 参数
|-------|-------|--------
|findPage   |触发表格查询数据，重置页码为1刷新数据。   --
|refresh    |触发表格查询数据，不重置页码，刷新当前页数据。    
|getTabelForm|  获取行编辑表单 


### data
|方法名 |说明 | 参数
|-------|-------|--------
|content| 当前页内容 |  --
|allContent | 所有内容    
|loading| 加载中标记   
|highItem   | 当前高亮行   
|selItems|    当前选中   


### column Attributes
#### 常用属性
|参数 |说明|    类型| 可选值 |默认值
|-----|-----|-----|-----|-----
|prop   |参数名称|  string      
|label| 显示的标题   |string     
|width  |对应列的宽度 |string     
|min-width| 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 |string 
|fixed  |列是否固定在左侧或者右侧，true 表示固定在左侧|
|sortable   |对应列是否可以排序      |true / false   
|type   |对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引 |string selection/index/expand  —
|formatter| 用来格式化内容|    Function(row, column, cellValue, index)     
|overflow   |等同show-overflow-tooltip        |   true
|align| 对齐方式        |   
|labelFormat    |自定义表头的内容. (可以用vuex自定义表头区)  { column, $index }      |
|其他 参考官网element中column中属性           |



#### 示例 

https://masterlink.yuque.com/docs/share/8bfdf66c-8cfa-4d3b-a149-fadf8d391680?# 《wm-table组件》