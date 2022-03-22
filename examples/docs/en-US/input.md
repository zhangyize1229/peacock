## quick search

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

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| getValue | input content | string/number | -- | --
