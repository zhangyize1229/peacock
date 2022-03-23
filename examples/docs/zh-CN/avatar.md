## 头像

:::demo

```html
<div style="width: 150px; height: 150px;">
  <wm-avatar
    :src="src"
    default-src=""
    :http-request="httpRequest"
    @delImage="delImage" 
  />
</div>
<script>
  export default {
    data() {
      return {
        src: 'https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF'
      }
    },
    methods: {
      httpRequest({file}) {
        console.log(file)
      },
      delImage() {
        this.src=""
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| src | 图片源，同原生 | string | -- | --
| defaultSrc | 默认图片 | string | -- | --
| fit | 确定图片如何适应容器框，同原生 object-fit | string | -- | --
| circle | 是否圆形 | boolean | -- | true
| maxSize | 上传文件的最大值 | number | -- | 5M
| httpRequest | 自定义上传的钩子 | function(file) | -- | --
