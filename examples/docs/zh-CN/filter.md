## 附件列表

:::demo

```html
<wm-filter :size="{label: '标题', placeholder: '输入'}" :status="status" :user="user"></wm-filter>
<script>
  export default {
    data() {
      return {
        status: {dic:[{label: '开发中', value: '0'}, {label: '规划中', value: '1'}]},
        user: {
          userDic: [{label: 'zhangsan', value: '1'},{label: 'lisi', value: '2'}],
          postDic: [{label: '管理员', value: '1'},{label: '普通员工', value: '2'}]
        }
      };
    },
    methods: {
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|--------
