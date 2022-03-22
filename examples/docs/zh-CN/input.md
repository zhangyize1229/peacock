## 快捷搜索

:::demo

```html
<wm-input @getValue="getValue" />
<script>
  export default {
    methods: {
      getValue (value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| getValue | 检索内容 | string/number | -- | --
