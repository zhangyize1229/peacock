# 附件列表

:::demo

```html
<wm-attachment :fileList="list" :httpRequest="upload" :onRemove ="getList">
</wm-attachment>
<script>
  export default {
    data() {
      return {
        list: [
          {
            fileName: '图片图片图片图片图片图片图片图片图片图片图片',
            link: '',
            size: '19k',
            time: '2020',
          },
          {
            fileName: 'img1',
            link: '',
            size: '19k',
            time: '2020',
          },{
            fileName: 'img1',
            link: '',
            size: '19k',
            time: '2020',
          }
        ]
      };
    },
    methods: {
      upload(file){
        console.log(file);
        this.list.push({ fileName: '图片图片图片图片图片图片图片图片图片图片图片',
            link: '',
            size: '19k',
            time: '2020',});
      },
      getList(file, fileList){

      }
    }
  }
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| mode | 模式 | string | horizontal / vertical | vertical
| accept | 接受上传的文件类型 | string |-- | --
| fileList | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | -- | []
| maxSize | 上传文件的最大值 | number | -- | 5M
| httpRequest | 自定义上传的钩子，函数要有返回值 类型为Blob则下载 | function(file) | -- | --
