# masterlink 业务组件库

## 组件列表

### 1. 导入导出组件

auth: zhanyize

```use
<WmUpload :number="50" :action="" :headers="" :download="()=>{}"  />
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| action | 上传必选参数，上传的地址 | string | -- | --
| headers | 设置上传的请求头部 | object | -- | --
| number | 数据量 | number | -- | 200
| maxSize | 上传文件的最大值 | number | -- | 5M
| uploadMsg |上传按钮的文字和图标 | object | --| {icon:el-icon-upload,name:上传文件}
| downloadMsg | 下载按钮的文字和图标 | object | -- | {icon:el-icon-download,name:下载模板}
| download | 下载模板的钩子，函数要有返回值{link:'',....} | function | -- | --

## Quick Start

``` dependencies
npm install element-ui
npm i vue-i18n
```

```shell
npm install peacock9
```
