## 上传文件

业务组件

:::demo

```html
<WmFileUpload tooltipContent="" fileUploadBtnIcon="" :handleRequest="handleRequest" @getFileList="getFileList"  >
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
| fileUploadBtnIcon | 按钮图标  | string | -- | --
| tooltipContent | tip内容  | string | -- | --


### Methods

| 方法名 | 说明 |参数
|---------|--------|-------| --------|--------
| getFileList | 上传后的文件列表  | function(fileList) | -- | --
