## form

:::demo

```html
<template>
    <div>
      <wm-preview  :fileList="fileList" @compare="compare" :file="file" @closePreview="closePreview" @chooseFileIndex="chooseFileIndex"></wm-preview>
    </div>
</template>      

<script>
// import request from '@/router/axios'
export default {
  data() {
    return {
      file: null,
      // 当前选中的列表的下标
      fileList: [{
        objectKey: 'upload/20220210/440228f894965f1036ab6242274577b3.pdf',
        suffix: 'pdf',
        link: "http://192.168.3.250:31032/000000-bladex/upload/20220210/440228f894965f1036ab6242274577b3.pdf",
        createTime: '122111',
        createUser: '121111',
        fileName: 'aaa',
        isCurrent: true,
        updateTime: '1321122',
        updateUser: 'hhh',
        version: '1.0',
        contentLength: 1000
      },
      {
        objectKey: 'upload/20220126/8f8ad71f2b6f72ea0b39b5495658c94f.txt',
        suffix: "txt",
        link: "http://192.168.3.250:31032/000000-bladex/upload/20220126/8f8ad71f2b6f72ea0b39b5495658c94f.txt",
        createTime: '122111',
        createUser: '121111',
        fileName: 'aaa',
        isCurrent: true,
        updateTime: '1321122',
        updateUser: 'hhh',
        version: '1.0',
        contentLength: 1000
      },
      {
        objectKey: 'upload/20220119/eef0b7511520393cea34b25e25ee06ae.jpg',
        suffix: "jpg",
        link: "http://192.168.3.250:31032/000000-bladex/upload/20220119/47ffd3b278c4cf59dc4ff3da480d07a5.png",
        createTime: '122111',
        createUser: '121111',
        fileName: 'aaa',
        isCurrent: true,
        updateTime: '1321122',
        updateUser: 'hhh',
        version: '1.0',
        contentLength: 1000
      }],
      file: null
    }
  },
  methods: {
      closePreview() {
          alert('关闭预览')
      },
       compare() {
          alert('版本对比')
      },
      chooseFileIndex(index) {
          alert('当前选择文件的下标为' + index)
      }
    // getContent() {
    //   request.get(`/api/blade-resource/oss/endpoint/file-content?fileName=${ fileName }`, { responseType: 'blob' }).then(res => {
    //     this.file = res.data
    //   })
    // }
  },
}
</script>

<style>

</style>

```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| fileList | 文件列表 | Array | []
| file | 文件（只有不存在link的时候才会用这个字段） | Blob | 

### Methods

| 方法名 | 说明 |参数
|---------|--------|-------| --------|--------
| compare | 点击版本对比按钮  | function() | -- | --
| closePreview | 关闭预览页面  | function() | -- | --
| chooseFileIndex | 选择文件，需要前端传入当前文件的file的blob格式  | function(index) | -- | --

### 注意事项
1.只有以下格式的文件支持预览
   1.text: ["txt", "nc", "json", "mpf", "spf", "eia", "stp", "prg", "tap", "conf", ""],
   2.image: ["jpg", "jpeg", "png", "svg", "gif", "bmp"],
   3.pdf: ["pdf"],
2. 只有文本类的格式的文件才需要去获取文件流["txt", "nc", "json", "mpf", "spf", "eia", "stp", "prg", "tap", ""]