## 分页组件

### 默认模式(完整形态)

:::demo

```html
<WmPagination :total="100" :current="1" @change="handlePageChange"/>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            handlePageChange(pager) {
                console.log(pager)
            }
        }
    }
</script>
```

:::

### 极简模式(最短分页形态)

:::demo

```html
<WmPagination mode="mini" :total="100" :currentPage="2" @change="handlePageChange"/>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
        handlePageChange(pager) {
            console.log(pager)
        }
    }
  }
</script>
```

:::

### 简单模式(分栏表格分页形态)

:::demo

```html
<WmPagination mode="simple" :total="100" @change="handlePageChange"/>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
        handlePageChange(pager) {
            console.log(pager)
        }
    }
  }
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---------|--------|-------| --------|-------------------
| mode | 分页模式 | string | `mini`：最短分页形态，只显示翻页按钮；`simple`：分栏表格分页形态；或不传则为完整形态 | --
| total | 总条目数 | number | -- | --
| currentPage |当前页数 | number | --| --
| pagerCount | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 6 且小于等于22偶数 | 6
| pageSizes | 每页显示个数选择器的选项设置 | number[] | -- | [15, 50, 100]
| disabled | 是否禁用 | boolean | -- | false
| hideOnSinglePage | 只有一页时是否隐藏 | boolean | -- | false
| popperClass | 每页显示个数选择器的下拉框类名 | string | -- | --
| prevText | 替代图标显示的上一页文字 | string | -- | --
| nextText | 替代图标显示的下一页文字 | string | -- | --


### Methods

| 方法名 | 说明 | 参数
|-------|------|--------
| change | 触发条件：pageSize 改变时，currentPage 改变时，用户点击上一页按钮改变当前页后，用户点击下一页按钮改变当前页后 | {current,size}页码和每页条数