## filter

:::demo

```html
<wm-filter
        :status="status"
        :user="user"
        @search ="getValue"
/>
<script>
    export default {
        data() {
            return {
                status: {
                    dic:[{label: 'In development', value: '0'}, {label: 'planning', value: '1'}],
                },
                user: {
                    userDic: [{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
                    postDic: [{label: 'admin', value: '1'},{label: 'General staff', value: '2'}],
                },
            };
        },
        methods: {
            getValue(value) {
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
| size | configuration options, see the following table size | object | -- | --
| status | configuration options, see the following table status | object | -- | --
| picker | configuration options, see the following table picker | object | -- | --
| user | configuration options, see the following table user | object | -- | --
| sizeProps | configuration options, see the following table sizeProps | object | -- | --
| statusProps | configuration options, see the following table statusProps | object | -- | --
| pickerProps | configuration options, see the following table pickerProps | object | -- | --
| userProps | configuration options, see the following table userProps | object | -- | --

### size

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | label | string | -- | scale
| placeholder | placeholder of Input | string | -- | Enter search size
| maxlength | same as maxlength in native input | number | -- | 64
| min | same as min in native input | number | -- | 0
| dic | drop down options,see the following table dicProps | array | -- | null,not null
| defaultValue | selected by default | string | null / not null / number | --

### status

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | label | string | -- | status
| dic | drop down options, see the following table dicProps | array | -- | --
| defaultValue | selected by default | string | -- | --

### picker

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | label | string | -- | expected to start
| startPlaceholder | placeholder of Input | string | -- | Start time
| endPlaceholder | placeholder of Input | string | -- | Start time
| pickerOptions |  element DatePicker | array | -- | last week,last month,last 3 month
| defaultValue | selected by default | string | -- | --

### user

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | label | string | -- | cc person
| placeholder | placeholder of Input | string | -- | 
| radioList | radioList | array | -- | person, post
| radioValue | selected by default | string | person, post | person
| userDic | drop down options, see the following table dicProps | array | -- | --
| postDic | drop down options, see the following table dicProps | array | -- | --
| userDefaultValue | selected by default | array | -- | --
| postDefaultValue | selected by default | array | -- | --


### sizeProps

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | specified as a property value of the options object |string |-- | 'label'
| placeholder | specified as a property value of the options object |string |-- | 'placeholder'
| maxlength | specified as a property value of the options object |number |-- | 'maxlength'
| min | specified as a property value of the options object |number |-- | 'min'
| defaultValue | specified as a property value of the options object |string |-- | 'defaultValue'
| dic | specified as a property value of the options object |array | -- | 'dic'

### statusProps

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | specified as a property value of the options object |string |-- | 'label'
| defaultValue | specified as a property value of the options object |array |-- | 'defaultValue'
| dic | specified as a property value of the options object |array | -- | 'dic'

### pickerProps

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | specified as a property value of the options object |string |-- | 'label'
| pickOptions | specified as a property value of the options object |array |-- | 'pickOptions'
| defaultValue | specified as a property value of the options object |array |-- | 'defaultValue'
| startPlaceholder | specified as a property value of the options object |string |-- | 'startPlaceholder'
| endPlaceholder | specified as a property value of the options object |string |-- | 'endPlaceholder'

### userProps

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| label | specified as a property value of the options object |string |-- | 'label'
| userDic | specified as a property value of the options object |array |-- | 'userDic'
| postDic | specified as a property value of the options object |array |-- | 'postDic'
| userDefaultValue | specified as a property value of the options object |array |-- | 'userDefaultValue'
| postDefaultValue | specified as a property value of the options object |array |-- | 'postDefaultValue'
| radioList | specified as a property value of the options object |array |-- | 'radioList'
| radioValue | specified as a property value of the options object | string / number |-- | 'radioValue'

### dicProps

| Attribute | Description | Type | Accepted Values | Default
|---------|--------|-------| --------|--------
| avatar | specified as a property value of the options object |string |-- | 'avatar'
| label | specified as a property value of the options object |string |-- | 'label'
| value | specified as a property value of the options object |string | -- | 'value'

### Methods

| Method | Description | Parameters
|---------|--------|-------
| search | getParams | --
