# masterlink 业务组件库

## 组件列表

### 1. 导入导出组件

```use
  <WmUpload :number="50" :httpRequest="" :download="" >
    ...content
  </WmUpload>
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| number | 数据量 | number | -- | 200
| maxSize | 上传文件的最大值 | number | -- | 5M
| uploadMsg |上传按钮的文字和图标 | object | --| {icon:el-icon-upload,name:上传文件}
| downloadMsg | 下载按钮的文字和图标 | object | -- | {icon:el-icon-download,name:下载模板}
| download | 下载模板的钩子，函数要有返回值{link:'',....} | function | -- | --
| httpRequest | 自定义上传的钩子，函数要有返回值 类型为Blob则下载 | function(file) | -- | --

### 2. 上传组件

```use
  <WmFileUpload :handleRequest="" @getFileList="" >
  </WmFileUpload>
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| handleRequest | 自定义上传的钩子，函数要有返回值  | function(file) | -- | --
#### Methods
| 方法名 | 说明 |参数
|---------|--------|-------| --------|--------
| getFileList | 上传后的文件列表  | function(fileList) | -- | --

### 3. 表格选择组件

```use
<wmSelectTable :columns="columns" :tableData="tableData" :showField="'name'" :choosenData="choosenData" :type="radio" @selectVal="selectVal"></wmSelectTable>
```
#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| columns | 表格头部  | Array | 格式： [{title: '', dataIndex: '',width: '100px'}]
| tableData | 表格数据  | Array | 格式： [{id：'', name: ''}] id为必填
| type | 表格格式  | String | 格式： ridio 或者  checkbox  | raido为默认
| pageSize | 表格的每页数据  | Number | 格式： ridio 或者  checkbox  | 默认为10
| width | 组件的宽度  | String | 格式： '600px'   | 默认为'600px'
| showField | 输入框显示的字段名，如果为空，则全部显示  | String | 格式： 'width'   | 默认为''
| choosenData | 外层选中的数据回传  | Array | 格式： 同tableData   | 默认为[]
| placeholder | 组件的输入框的提示  | String | 格式： ''   | 默认为''


#### Methods
| 方法名 | 说明 |参数
|---------|--------|-------| 
| selectVal | 上传后的文件列表  | function(fileList) 


## Quick Start


``` dependencies
npm install element-ui
npm i vue-i18n
```

```shell
npm install peacock9
```
