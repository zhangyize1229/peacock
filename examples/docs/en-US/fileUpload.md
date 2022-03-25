## upload file

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

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| handleRequest | Hook to download template, function must return value  | function(file) | -- | --
| fileUploadBtnIcon | button icon  | string | -- | --
| tooltipContent | tip contennt  | string | -- | --

### Methods

| Method | Description |Parameters
|---------|--------|-------| --------|--------
| getFileList | List of uploaded files  | function(fileList) | -- | --
