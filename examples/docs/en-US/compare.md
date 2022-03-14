## File comparison

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
| version | Specifies the version as an attribute value of the options object |string |-- | 'versionDesc'
| objectKey | Specifies the objectKey as an attribute value of the options object |string |-- | 'objectKey'
| content | Specifies the file stream as an attribute value of the options object |string |-- | 'content'
| isCurrent | Specifies the current version as an attribute value of the options object |string |-- | 'isCurrent'



