## upload file

:::demo

```html
<WmFileUpload :handleRequest="handleRequest" @getFileList="getFileList" >
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

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| handleRequest | Hook to download template, function must return value  | function(file) | -- | --
| fileUploadBtnIcon | button icon  | string | -- | el-icon-warning-outline
| fileUplodBtnText | button text  | string | -- | Upload file
| showTooltip | Whether to show the tip  | boolean | -- | false
| tooltipContent | tip contennt  | string | -- | If the file name is the same, the original file will be overwritten

### Methods

| Method | Description |Parameters
|---------|--------|-------| --------|--------
| getFileList | List of uploaded files  | function(fileList) | -- | --
