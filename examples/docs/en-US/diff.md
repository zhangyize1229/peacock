## diff

dependencies [diff](), [diff2Html]()

:::demo

```html
<wm-diff :old-string="oldString" :new-string="newString" @customRender="customRender">
</wm-diff>
<script>
  export default {
    data() {
      return {
        oldString: 'masterinkkkkkkk\ndemo\ntext\nmasterLink\ndemo\ntext\nmasterLink\ndemo\ntext\nmasterLink\ndemo\ntext',
        newString: 'masterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt\nmasterLink\ndemo11\ntexttt'
      };
    },
    methods: {
      customRender() {
        console.log('比较后相同的钩子')
      },
    }
  }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| oldString | oldString | string | -- | --
| newString | newString | string |-- | --
| context | How many lines are separated from top to bottom without hiding | boolean |-- | true
| outputFormat | way of showing | array | line-by-line，side-by-side | side-by-side
| drawFileList | Show comparison file name | boolean |-- | false
| fileName | file name | String |-- | --
