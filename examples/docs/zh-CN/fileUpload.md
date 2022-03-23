## 上传文件

业务组件

:::demo

```html
<WmFileUpload :handleRequest="handleRequest" @getFileList="getFileList"  >
</WmFileUpload>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleRequest(file){
        console.log(file);
      },
      getFileList(file){
        console.log(file);
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| handleRequest | 自定义上传的钩子，函数要有返回值  | function(file) | -- | --
| fileUploadBtnIcon | 按钮图标  | string | -- | el-icon-warning-outline
| fileUplodBtnText | 按钮文字  | string | -- | 上传文件
| showTooltip | 是否展示tip  | boolean | -- | false
| tooltipContent | tip内容  | string | -- | 如果文件名称相同，则会覆盖原文件


### Methods

| 方法名 | 说明 |参数
|---------|--------|-------| --------|--------
| getFileList | 上传后的文件列表  | function(fileList) | -- | --
