## form

:::demo

```html
<template>
    <div style="position: relative;">
        <el-button @click="$refs.form.show()">新增</el-button>
        <el-button @click="$refs.form.show(data)">编辑</el-button>
            <wm-form name="表单" ref="form" :resetData="resetData" :dataRule="dataRule" @submitForm="submitForm" style="z-index: 3;">
                <template v-slot="{ dataForm }">
                    <el-form-item label="用户编号" prop="code">
                        <el-input v-model="dataForm.code"></el-input>
                    </el-form-item>
                    <el-form-item label="用户平台" prop="userType">
                        <el-select v-model="dataForm.userType" placeholder="平台选择" clearable>
                            <el-option v-for="(item,index) in userTypeList" :label="item.label" :value="item.value" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
        </template>
            </wm-form>
    </div>
</template>      

<script>
  export default{
  	methods: {
			submitForm(form){
				console.log(form);
			},
    },
    data(){
    	return {
        data: {
          name: 'hello',
          code: '1234'
        },
        dataRule:{
          avatar: [{ required: true, message: '上传头像不能为空', trigger: 'blur' }],
          code: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }],
          userType: [{ required: true, message: '平台不能为空', trigger: 'blur' }],
          account: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
          password: [{ required: true, message: '不能为空', trigger: 'blur' }],
          name: [{ required: true, message: '不能为空', trigger: 'blur' }]
        },
        resetData: {
          code: '默认的'
        }
      }
    }
  }
</script>

```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| dataRule | The verification rules of the form are the same as elementui | Object | 
| size | Used to control the size of components in the form | String | medium / small / mini | medium
| resetData | The reference data echoed when the form is reset. It can also be used as the default filling of a parameter when adding. | Object |    | {}
| labelPosition | Form alignment | String | left/right/top | left
| labelWidth | Width of form field label | String | -- | 80px
| asc | Sorting parameter method for the first query | Boolean | -- | false
| name | Breadcrumb breadcrumb first text description | String | -- | 
| enter | Can I use carriage return to submit the form | boolean | -- | false
