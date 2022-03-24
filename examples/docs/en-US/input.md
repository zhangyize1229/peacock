## quick search

:::demo

```html
<wm-input placeholder="" v-model="value" @getValue="getValue" />
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

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
/ value / v-model | binding value | string / number / boolean | -- | --
| getValue | content | string/number | -- | --
| placeholder | placeholder of Input | string | -- | Enter search content
