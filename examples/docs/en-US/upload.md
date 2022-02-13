## Import and Export

:::demo

```html
<wm-upload :number="50" :download="download" :httpRequest="upload" >
  <div>...content</div>
</wm-upload>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      download(){
        return true;
      },
      upload(file){
        return true;
      }
    }
  }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| number | The amount of data | number | -- | 200
| maxSize | Maximum upload file size | number | -- | 5M
| uploadMsg | Upload button text and icon | object | --| {icon:el-icon-upload,name:upload file}
| downloadMsg | Download button text and icon | object | -- | {icon:el-icon-download,name:download template}
| download | Hook to download template, function must return value{link:'',....} | function | -- | --
| httpRequest | Customize the upload hook, the function must have a return value and the type is Blob to download | function(file) | -- | --
