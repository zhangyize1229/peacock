## 文件对比

:::demo

```html
<div>
  <wm-compare :file-list="fileList" :right-file="rightFile" :left-file="leftFile" @setVersion="getVersion" @onChange="onChange" @onClose="onClose">
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
          versionDesc:null
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
          versionDesc:null
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
          versionDesc:null
        }],
        leftFile: {
          objectKey:"upload/20220304/cb64cf68a0db6716da4c4cd6fe55f5a6.txt",
          content: new Blob(["12345"], {type: 'text/plain'}),
        },
        rightFile: {
          objectKey:"upload/20220303/78e89f0f512e76cc30b3fd6075c1b472.txt",
          content: new Blob(["12345"], {type: 'text/plain'}),
        }
      };
    },
    methods: {
      getVersion(obj) {
        console.log(obj)
        // ajax....
      },
      onClose(){
      // close
      },
      onChange(params) {
        const {type, data} = params
        switch (type) {
          case 'left': 
            this.leftFile= {...data, ...{content: new Blob(["12345sadfsadf"], {type: 'text/plain'})}}
            break;
          case 'right':
            this.rightFile = {...data, ...{content: new Blob(["123s45sadfsadfs"], {type: 'text/plain'})}}
            break;
        }
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| leftFile | 左侧文件 | Object | -- | --
| rightFile | 右侧文件 | Object |-- | --
| fileList | 文件列表 | Array |-- | --
| props | 配置选项，具体看下表 | Object |-- | --

### Methods

| 方法名 | 说明 |参数
|---------|--------|-------| --------|--------
| onClose | 关闭  | function() | -- | --
| setVersion | 设置版本  | function(obj) | -- | --
| onChange | 下拉筛选  | function({type, data}) | -- | --

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| version | 指定文件版本为选项对象的某个属性值 |string |-- | 'version'
| objectKey | 指定文件地址为选项对象的某个属性值 |string |-- | 'objectKey'
| content | 指定文件流为选项对象的某个属性值 |string |-- | 'content'
| isCurrent | 指定当前版本为选项对象的某个属性值 |string |-- | 'isCurrent'



