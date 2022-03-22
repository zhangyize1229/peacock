## 头像

:::demo

```html
<div style="width: 150px; height: 150px;">
  <wm-avatar />
</div>
<script>
  export default {
    methods: {
      
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
