## 头像

:::demo

```html
<div>
  <wm-avatar
    :width="120"
    :src="src"
    default-src=""
    :http-request="httpRequest"
    :hide-btn="true"
    @delImage="delImage" 
  />
</div>
<script>
  export default {
    data() {
      return {
        src: ''
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
| width | 宽度 | number | -- | --
| src | 图片源，同原生 | string | -- | --
| defaultSrc | 默认图片 | string | -- | --
| fit | 确定图片如何适应容器框，同原生 object-fit | string | -- | --
| circle | 是否圆形 | boolean | -- | true
| maxSize | 上传文件的最大值 | number | -- | 5M
| hideBtn | 隐藏修改btn | boolean | -- | false
| httpRequest | 自定义上传的钩子 | function(file) | -- | --
| delImage | 删除 | function() | -- | --
