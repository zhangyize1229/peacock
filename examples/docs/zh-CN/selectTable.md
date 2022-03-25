## 表格选择组件

:::demo

```html
<wmSelectTable :columns="columns" :tableData="tableData" :showField="'machineName'" :choosenData="choosenData" :type="radio" @selectVal="selectVal"></wmSelectTable>
<script>
  export default {
    data() {
      return {
        columns: [
        {
            title: 'workstation.device_number',
            dataIndex: "machineCode",
            width: "100px",
            },
            {
            title: 'workstation.device_name',
            dataIndex: "machineName",
            width: "100px",
            },
            {
            title:'workstation.machine_brand',
            dataIndex: 'brand'
            }
        ],
        choosenData: [
                {
                id: "1499272202584911874",
                machineName: "2",
             
        }],
      tableData: [
            {
                brand: "",
                collectDriver: "DMP.DeviceDriver.Virtual.MemeoryDriver",
                collectSwitch: 0,
                extendId: "3d650f16-6333-41b6-8d6d-c005e25804ee",
                groupId: 2,
                id: "1499272202584911874",
                label: "2",
                machineCode: "2",
                machineModel: null,
                machineName: "2",
                machinePinCode: null,
                machineShortCode: null,
                machineType: null,
                name: "2",
                typeName: "WIMI VMemory Block",
                value: "2",
            },
            {
                brand: null,
                collectDriver: "DMP.DeviceDriver.Virtual.VirtualDriver",
                collectSwitch: 0,
                extendId: "5adf6e6a-ffd3-4f4b-9f1f-a5ce5d32ea75",
                groupId: 2,
                id: "1499295158031421441",
                label: "171的工位1",
                machineCode: "171的工位1",
                machineModel: "CM_KG",
                machineName: "171的工位1",
                machinePinCode: null,
                machineShortCode: null,
                machineType: null,
                name: "171的工位1",
                typeName: "WIMI VD V2.0",
                value: "171的工位1",
            },
            {
                brand: null,
                collectDriver: null,
                collectSwitch: 0,
                extendId: null,
                groupId: null,
                id: "1499307371404267522",
                label: "87654",
                machineCode: "87654",
                machineModel: null,
                machineName: "87654321",
                machinePinCode: null,
                machineShortCode: null,
                machineType: null,
                name: "87654321",
                typeName: null,
                value: "87654",
            }

        ]

      };
    },
    methods: {
      download(){
        return true;
      },
      upload(file){
        return true;
      }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
| columns | 表格头部  | Array | 格式： [{title: '', dataIndex: '',width: '100px'}]
| tableData | 表格数据  | Array | 格式： [{id：'', name: ''}] id为必填
| type | 表格格式  | String | 格式： ridio 或者  checkbox  | raido为默认
| pageSize | 表格的每页数据  | Number | 格式： ridio 或者  checkbox  | 默认为5
| width | 组件的宽度  | String | 格式： '600px'   | 默认为'600px'
| showField | 输入框显示的字段名，如果为空，则全部显示  | String | 格式： 'width'   | 默认为''
| choosenData | 外层选中的数据回传  | Array | 格式： 同tableData  必传项为id，以及showField | 默认为[]
| placeholder | 组件的输入框的提示  | String | 格式： ''   | 默认为''
