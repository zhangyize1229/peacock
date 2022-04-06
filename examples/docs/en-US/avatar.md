## avatar

:::demo

```html
<div style="width: 150px; height: 150px;">
  <wm-avatar default-src="https://t7.baidu.com/it/u=4240641596,3235181048&fm=193&f=GIF" :http-request="httpRequest" @delImage="()=>{src=''}" />
</div>
<script>
    export default {
        methods: {
            httpRequest({file}) {
                console.log(file)
            }
        }
    }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| width | width | number | -- | --
| src | Image source, same as native | string | -- | --
| defaultSrc | Defalut image | string | -- | --
| fit | Indicate how the image should be resized to fit its container, same as object-fit | string | -- | --
| circle | determine whether it's a circle | boolean | -- | true
| maxSize | Maximum upload file size | number | -- | 5M
| hideBtn | is hide edit btn | boolean | -- | false
| httpRequest | Customize the upload hook | function(file) | -- | --
| delImage | delete | function() | -- | --
