## Attachment

:::demo

```html
<wm-attachment :fileList="list" :show-add="true" :httpRequest="upload" :onRemove ="getList">
</wm-attachment>
<script>
  export default {
    data() {
      return {
        list: [
          {
            fileName: '图片图片图片图片图片图片图片图片图片图片图片.png',
            link: '',
            size: '29k',
            type: 'image/png',
            time: '2022-2-1',
          },
          {
            fileName: 'jpg',
            link: '',
            size: '',
            type: 'image/jpeg',
            time: '',
          },
          {
            fileName: 'pdf',
            link: '',
            size: '',
            type: 'application/pdf',
            time: '',
          },{
            fileName: 'zip',
            link: '',
            size: '',
            type: 'application/zip',
            time: '',
          },
          {
            fileName: 'rar',
            link: '',
            size: '',
            type: 'application/x-rar',
            time: '',
          },
          {
            fileName: 'rar',
            link: '',
            size: '',
            type: '',
            time: '',
          }
        ]
      };
    },
    methods: {
      upload({file}){
        this.list.push({ 
            fileName: file.name,
            link: '',
            size: file.size,
            type: file.type,
            time: '',});
      },
      getList(file, fileList){
        console.log(file, fileList);
      }
    }
  }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| mode | mode | string | horizontal / vertical | horizontal
| accept | accepted file types | string |-- | --
| show-add | whether to show a add button | boolean |-- | true
| fileList | default uploaded files, e.g. : [{fileName: 'food.jpg', link: 'https://xxx.cdn.com/xxx.jpg', size: '', time: ''}] | array | -- | []
| maxSize | Maximum upload file size | number | -- | 5M
| httpRequest | Customize the upload hook | function(file) | -- | --
| onRemove | hook function when files are removed | function(file, fileList) | -- | --

### Props

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| fileName | Specifies the filename as an attribute value of the options object |string |-- | 'fileName'
| link | Specify the file path as a property value of the options object |string |-- | 'link'
| size | Specifies the file size as a property value of the options object |string |-- | 'size'
| type | Specifies the file type as a property value of the options object |string |-- | 'type'
| time | Specify the creation time as a property value of the options object |string |-- | 'time'
