## 表格

:::demo

```html
<template>
    <div>
        <wm-table ref="table" :data="data" :columns="columns" pagination-type="client" :edit-row="editRow" :rules="dataRule">

            <template #name="{scope}">

                <el-form-item v-if="scope.row === editRow" prop="name">
                    <el-input v-model="scope.row.name" ></el-input>
                </el-form-item>
                <span v-else>{{scope.row.name}}</span>
            </template>

            <template #header="{scope}">
                <div v-if="scope.row === editRow">
                    <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
                    <el-button type="text" @click="editRow = null">取消</el-button>
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

    export default {
        created(){
            this.data = data
        },
        methods: {
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
                    {prop: 'id',label: '商品ID', sortable: true},
                    {prop: 'name',label: '商品名称', sortable: true},
                    {prop: 'desc',label: '描述', sortable: true},
                ],
                data: []
            }
        }
    }
</script>
```

:::
