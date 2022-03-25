## 快捷搜索

:::demo

```html
<wm-input style="width: 200px;" placeholder="" v-model="value" @getValue="getValue" />
<script>
  export default {
    data() {
      return {
          value: '',
      }
    },
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
/ value / v-model | 绑定值 | string / number / boolean | -- | --
| getValue | 检索内容 | string/number | -- | --
| placeholder | 输入框占位文本 | string | -- | 请输入检索内容
