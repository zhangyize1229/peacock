## 表格

:::demo

```html
<template>
    <div>
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
