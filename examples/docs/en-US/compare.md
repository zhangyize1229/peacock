## File comparison

:::demo

```html
<div>
  <wm-compare :file-list="fileList" :right-file="rightFile" :left-file="leftFile" @setVersion="getVersion" @onChange="onChange">
  </wm-compare>
</div>
<script>
  export default {
    data() {
      return {
        fileList: [{
          filename:null,
          objectKey:"upload/20220304/cb64cf68a0db6716da4c4cd6fe55f5a6.txt",
          isCurrent:1,
          link:"http://192.168.3.250:31032/000000-bladex/upload/20220304/cb64cf68a0db6716da4c4cd6fe55f5a6.txt",
          contentMd5:"825349594",
          contentLength:1,
          contentType:"application/octet-stream",
          suffix:"txt",
          version:"2.0",
          versionDesc:"2.0"
        },
        {
          filename:null,
          objectKey:"upload/20220303/78e89f0f512e76cc30b3fd6075c1b472.txt",
          isCurrent:0,
          covertTime:null,
          link:"http://192.168.3.250:31032/000000-bladex/upload/20220303/78e89f0f512e76cc30b3fd6075c1b472.txt",
          contentMd5:"1228563095",
          contentLength:1,
          contentType:"application/octet-stream",
          suffix:"txt",
          version:"1.0",
          versionDesc:"1.0"
        },
        {
          filename:null,
          objectKey:"upload/20220303/78e89f0f512e76cc30b3fd6075c1b432.txt",
          isCurrent:0,
          covertTime:null,
          link:"http://192.168.3.250:31032/000000-bladex/upload/20220303/78e89f0f512e76cc30b3fd6075c1b234.txt",
          contentMd5:"122853454235",
          contentLength:1,
          contentType:"application/octet-stream",
          suffix:"txt",
          version:"3.0",
          versionDesc:"3.0"
        }],
        rightFile: {
          objectKey:"upload/20220304/cb64cf68a0db6716da4c4cd6fe55f5a6.txt",
          content: '',
        },
        leftFile: {
          objectKey:"upload/20220303/78e89f0f512e76cc30b3fd6075c1b472.txt",
          content: '',
        }
      };
    },
    methods: {
      getVersion(obj) {
        console.log(obj)
      },
      onChange(params) {
        const {type, data} = params
        switch (type) {
          case 'left': 
            this.leftFile= {...data, ...{content: '11111'}}
            break;
          case 'right':
            this.rightFile = {...data, ...{content: '22222'}}
            break;
        }
      }
    }
  }
</script>
```

:::

### Attributes

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| leftFile | left file | Object | -- | --
| rightFile | right file | Object |-- | --
| fileList | file list | Array |-- | --
| props | configuration options, see the following table | Object |-- | --

### Methods

| Method | Description |Parameters
|---------|--------|-------| --------|--------
| onClose | close  | function() | -- | --
| setVersion | Set version  | function(obj) | -- | --
| onChange | triggers when the selected value changes  | function({type, data}) | -- | --

### Props

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| version | Specifies the version as an attribute value of the options object |string |-- | 'version'
| objectKey | Specifies the objectKey as an attribute value of the options object |string |-- | 'objectKey'
| content | Specifies the file stream as an attribute value of the options object |string |-- | 'content'
| isCurrent | Specifies the current version as an attribute value of the options object |string |-- | 'isCurrent'



