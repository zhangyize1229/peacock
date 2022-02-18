## 表格选择组件

:::demo

```html
<wmSelectTable :columns="columns" :tableData="tableData" :showField="'name'" :choosenData="choosenData" :type="radio" @selectVal="selectVal"></wmSelectTable>
<script>
  export default {
    data() {
      return {
        columns: [
        {
            title: "machineCode",
            dataIndex: "machineCode",
            width: "100px",
          },
          {
            title: 'device_name',
            dataIndex: "machineName",
            width: "100px",
          },
          {
            title: 'machine_brand',
            dataIndex: 'brand'
          }
        ],
        "tableData": [
            {
                "id": "1485819133618663425",
                "extendId": "30d298d235dd33e729b3db02b5098c69",
                "machineCode": "test011",
                "machineName": "测试机器11",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "100*100*100",
                "brand": "牧野",
                "groupId": 2
            },
            {
                "id": "1485908708961665025",
                "extendId": "18f0e5935bd8a86537929b16758a6eee",
                "machineCode": "test02",
                "machineName": "测试设备2",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "200*200",
                "brand": "makino",
                "groupId": 2
            },
            {
                "id": "1486248434059026434",
                "extendId": "9e41e48e30d0f0625c9db0999456ff7d",
                "machineCode": "test6",
                "machineName": "测试设备6",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "100* 100*100",
                "brand": "makino",
                "groupId": 2
            },
            {
                "id": "1486877779498012674",
                "extendId": "8462b2447f1ecb90ab8cf4560af6d9ad",
                "machineCode": "test004",
                "machineName": "test004",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486877987636154369",
                "extendId": "95d4d1ad93751eff90b4f49b88cbaf8f",
                "machineCode": "test07",
                "machineName": "test07",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486878175746494466",
                "extendId": "b7f88c74646e0421e7b20fadb9412bdb",
                "machineCode": "test8",
                "machineName": "test8",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486878251667591169",
                "extendId": "5d232e6598825422e1aad25814db1ef8",
                "machineCode": "test9",
                "machineName": "test9",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486878526847488002",
                "extendId": "04f145e5ec92828988f81ca3c2ff98f4",
                "machineCode": "test10",
                "machineName": "test10",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486882665690206209",
                "extendId": "3f05aa09abf634e9fddf5c4b0cabb297",
                "machineCode": "vcxv",
                "machineName": "xcvcvz",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486882889661845505",
                "extendId": "51fc5b616bf5294ddb47e567e3afec63",
                "machineCode": "vbn",
                "machineName": "xcvbcv",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486886167409758210",
                "extendId": "63f64c3033a5bbf35666b5d10c971ec5",
                "machineCode": "cvb",
                "machineName": "cvb",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486886631299780609",
                "extendId": "25a87bdd8928f51dc039d5cd86ce0568",
                "machineCode": "xcv",
                "machineName": "xcv",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486888250993184770",
                "extendId": "4a651abf6fb34c80334e49f18102cc1d",
                "machineCode": "nhjn",
                "machineName": "ghjmn",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486888903840796674",
                "extendId": "144f1e06703574cc3d1fcec70ac04acd",
                "machineCode": "cdfv",
                "machineName": "cdfv",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1486894258012459010",
                "extendId": "d24b9738879df39c4802459edb86207d",
                "machineCode": "vbgf",
                "machineName": "sdfgghsdfg",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1491334140359876610",
                "extendId": null,
                "machineCode": "11",
                "machineName": "11",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": null,
                "brand": null,
                "groupId": 2
            },
            {
                "id": "1491572687599931394",
                "extendId": "c5edf1e8-07b2-4e9a-89d6-1589dc265262",
                "machineCode": "12333",
                "machineName": "333",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": null,
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1491709418618290178",
                "extendId": "5cb1f6bf69a4936ba22e20af191013e8",
                "machineCode": "test",
                "machineName": "测试机器",
                "collectSwitch": 0,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": "testdasnk",
                "brand": "",
                "groupId": 2
            },
            {
                "id": "1493023632234319874",
                "extendId": "831cc5eb-6889-4cb6-ab9a-0f9bbd80e1ea",
                "machineCode": "234231",
                "machineName": "213213",
                "collectSwitch": 1,
                "collectDriver": null,
                "typeName": null,
                "machineType": null,
                "machineModel": null,
                "brand": "",
                "groupId": 2
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
| pageSize | 表格的每页数据  | Number | 格式： ridio 或者  checkbox  | 默认为10
| width | 组件的宽度  | String | 格式： '600px'   | 默认为'600px'
| showField | 输入框显示的字段名，如果为空，则全部显示  | String | 格式： 'width'   | 默认为''
| choosenData | 外层选中的数据回传  | Array | 格式： 同tableData   | 默认为[]
| placeholder | 组件的输入框的提示  | String | 格式： ''   | 默认为''
