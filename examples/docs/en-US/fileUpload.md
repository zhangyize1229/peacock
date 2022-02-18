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

### Methods

| Method | Description |Parameters
|---------|--------|-------| --------|--------
| getFileList | List of uploaded files  | function(fileList) | -- | --
