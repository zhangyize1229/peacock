## 附件列表

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

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| mode | 模式 | string | horizontal / vertical | vertical
| accept | 接受上传的文件类型 | string |-- | --
| show-add | 是否显示新增按钮 | boolean |-- | true
| fileList | 上传的文件列表, 例如: [{fileName: 'food.jpg', link: 'https://xxx.cdn.com/xxx.jpg', size: '', type: '', time: ''}] | array | -- | []
| props | 配置选项，具体见下表 | Object |-- | --
| maxSize | 上传文件的最大值 | number | -- | 5M
| httpRequest | 自定义上传的钩子 | function(file) | -- | --
| onRemove | 文件列表移除文件时的钩子 | function(file, fileList) | -- | --

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| fileName | 指定文件名为选项对象的某个属性值 |string |-- | 'fileName'
| link | 指定文件路径为选项对象的某个属性值 |string |-- | 'link'
| size | 指定文件大小为选项对象的某个属性值 |string |-- | 'size'
| type | 指定文件类型为选项对象的某个属性值 |string |-- | 'type'
| time | 指定创建时间为选项对象的某个属性值 |string |-- | 'time'
