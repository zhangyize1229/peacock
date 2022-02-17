<template>
  <div>
    <wm-table
      :query="query"
      :custRequest="custRequest"
      :columns="columns"
      :auto="false"
    ></wm-table>
  </div>
</template>

<script>
const data = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
];
import wmTable from "../packages/table";

export default {
  components: { wmTable },
  created() {
    this.data = data;
  },
  methods: {
    custRequest(page) {
      return new Promise((resolve) => {
        const params = { current: page.page, size: page.limit, ...page.query };
        (page.asc && (params.ascs = page.sort)) || (params.descs = page.sort);

        resolve({ data: { content: this.data, total: 200 } });
      });
    },
  },
  data() {
    return {
      query: {
        name: "test",
      },
      columns: [
        { prop: "date", label: "日期" },
        { prop: "name", label: "姓名" },
        { prop: "address", label: "地址" },
      ],
      data: [],
    };
  },
};
</script>

<style></style>
