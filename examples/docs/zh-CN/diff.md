## diff

依赖项 [diff](), [diff2Html]()

:::demo

```html
<div style="height: 150px;">
    <wm-diff :old-string="oldString" :new-string="newString" />
</div>
<script>
  export default {
    data() {
      return {
        oldString: 'masterinkkkkkkk\ndemo\ntext\nmasterLink\ndemo\ntext\nmasterLink\ndemo\ntext\nmasterLink\ndemo\ntext',
        newString: 'masterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt'
      };
    },
    methods: {
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| oldString | 旧文本 | string | -- | --
| newString | 新文本 | string |-- | --
| context | 上下间隔多少行不隐藏 | Number |-- | 2500
| outputFormat | 展示的方式 | array | line-by-line，side-by-side | side-by-side
| drawFileList | 展示对比文件名称 | boolean |-- | false
| fileName | 文件名 | String |-- | --

