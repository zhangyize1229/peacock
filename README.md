# masterlink 业务组件库

## 组件列表

### 1. 导入导出组件

```use
<WmUpload :ruleData="ruleData" :number="50" :action="action" :headers="headers" :link="link" />
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| resource | 覆盖默认值，具体看下表 | Array | -- | --
| ruleData | 具体规则 例如：['1.编号','2.名称']| Array | --| --
| action | 上传必选参数，上传的地址 | string | -- | --
| headers | 设置上传的请求头部 | object | -- | --
| maxSize | 上传文件的最大值 | number | -- | 5M
| accept | 接受上传的文件类型 | string | -- | .xls,.xlsx
| upload |上传按钮的文字和图标 | object | --| {icon:el-icon-upload,name:上传文件}
| download | 下载按钮的文字和图标 | object | -- | {icon:el-icon-download,name:下载模板}
| link | 下载文件的链接 | string | -- | --
| blob | 下载文件的流文件 | string | -- | --

##### resource

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| header | {icon:'',msg:''} | Array | -- | --
| btn | true：下载 false: 上传  | boolean | --| --
| content | {msg:'',boldMsg: '',dropDownMsg: '',children: []} | object | -- | --

## Quick Start

``` dependencies
npm install element-ui
npm i vue-i18n
```

```shell
npm install peacock9
```
