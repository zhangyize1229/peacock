## 文件对比

:::demo

```html
<div style="height: 300px;">
  <wm-compare :file-list="fileList" :right-file="rightFile" :left-file="leftFile" @setVersion="getVersion" @onChange="onChange" @onClose="onClose">
  </wm-compare>
</div>
<script>
  export default {
    data() {
      return {
        fileList: [{
          filename:2,
          objectKey:"upload/002.txt",
          isCurrent:1,
          versionDesc:"2.0",
          content: new Blob(["11111111111111111111111111\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1"], {type: 'text/plain'}),
        },
        {
          filename:1,
          objectKey:"upload/001.txt",
          isCurrent:0,
          versionDesc:"1.0",
          content: new Blob(["11111111111111111111111111\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1"], {type: 'text/plain'}),
        },
        {
          filename:3,
          objectKey:"003.txt",
          isCurrent:0,
          versionDesc:"3.0",
          content: new Blob(["111111111"], {type: 'text/plain'}),
        },
        {
          filename:4,
          objectKey:"upload/004.txt",
          isCurrent:0,
          versionDesc:"4.0",
          content: new Blob(["111111111"], {type: 'text/plain'}),
        }],
        leftFile: {},
        rightFile: {}
      };
    },
    created() {
      this.leftFile = this.fileList[0];
      this.rightFile = this.fileList[1];
    },
    methods: {
      getVersion(obj) {
          this.fileList= [{
              filename:2,
              objectKey:"upload/002.txt",
              isCurrent:0,
              versionDesc:"2.0",
              content: new Blob(["11111111111111111111111111\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1"], {type: 'text/plain'}),
          },
              {
                  filename:1,
                  objectKey:"upload/001.txt",
                  isCurrent:1,
                  versionDesc:"1.0",
                  content: new Blob(["11111111111111111111111111\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1"], {type: 'text/plain'}),
              },
              {
                  filename:3,
                  objectKey:"003.txt",
                  isCurrent:0,
                  versionDesc:"3.0",
                  content: new Blob(["111111111"], {type: 'text/plain'}),
              },
              {
                  filename:4,
                  objectKey:"upload/004.txt",
                  isCurrent:0,
                  versionDesc:"4.0",
                  content: new Blob(["111111111"], {type: 'text/plain'}),
              }]
      },
      onClose(){
      // close
      },
      onChange(params) {
        const {type, data} = params
        switch (type) {
          case 'left':
            this.leftFile= {
                filename:null,
                objectKey:"upload/20220303/78e89f0f512e76csdafc30b3fd6075c1b432.txt",
                isCurrent:0,
                versionDesc:"3.0",
                content: new Blob(["111111111"], {type: 'text/plain'}),
            }
            break;
          case 'right':
            this.rightFile = data
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
| version | 指定文件版本为选项对象的某个属性值 |string |-- | 'versionDesc'
| objectKey | 指定文件地址为选项对象的某个属性值 |string |-- | 'objectKey'
| content | 指定文件流为选项对象的某个属性值 |string |-- | 'content'
| isCurrent | 指定当前版本为选项对象的某个属性值 |string |-- | 'isCurrent'



