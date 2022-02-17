<template>
  <div class="we-table-page">
    <!--工具栏-->
    <slot name="toolbar" v-bind:selItems="selItems"></slot>
    <el-form
      class="we-table-form"
      ref="tableForm"
      :model="editRow"
      :rules="rules"
    >
      <el-table
        class="we-table"
        :data="content"
        :stripe="stripe"
        :border="border"
        fit
        highlight-current-row
        v-loading="loading"
        @selection-change="selectionChange"
        @current-change="currentChange"
        sortable="custom"
        @sort-change="sortChange"
        @cell-click="cellClick"
        :row-class-name="defaultRowClassName"
        @select="selectChange"
        v-bind="$props"
        ref="table"
      >
        <el-table-column width="1px" style="display: none"></el-table-column>
        <column :columns="columns">
          <template slot="expand" slot-scope="props">
            <slot name="expand" v-bind:scope="props"></slot>
          </template>
          <template v-for="item in mainSlot" slot-scope="scope" :slot="item">
            <slot
              v-bind:scope="scope"
              v-bind:iscell="editRow == scope.row"
              :name="item"
            ></slot>
          </template>
        </column>
        <el-table-column
          :label="t('link.menu')"
          fixed="right"
          v-if="this.$scopedSlots.btn"
          header-align="left"
          align="left"
          min-width="50"
        >
          <template slot-scope="scope">
            <slot name="btn" v-bind:scope="scope"></slot>
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <template v-if="this.$scopedSlots.pagination">
      <slot
        name="pagination"
        v-bind:page="pageRequest"
        @pagination="doPagiation"
      ></slot>
    </template>
    <template v-else>
      <Pagination
        :layout="layout"
        :total="pageRequest.total"
        :page.sync="pageRequest.page"
        :limit.sync="pageRequest.limit"
        @pagination="doPagiation"
        :pageSizes="pageSizes"
        :auto-scroll="autoScroll"
      ></Pagination>
    </template>
  </div>
</template>

<script>
import Pagination from "./Pagination";
import { Table } from "element-ui";
import { byAsc, byDesc } from "./util";
import Column from "./Column.vue";

export default {
  name: "WmTable",
  components: {
    Pagination,
    Column,
  },
  props: {
    columns: { type: Array },
    query: Object,
    url: String,
    limit: { type: Number, default: 10 },
    //分页方式 server client
    paginationType: { type: String, default: "server" },
    showAll: { type: Boolean, default: false },
    autoScroll: { type: Boolean, default: true },
    underline: { type: Boolean, default: true },
    pageSizes: {
      type: Array,
      default() {
        var page = [].concat(
          (this.$OPTS.table && this.$OPTS.table.pageSizes) || []
        );
        return page.length != 0 ? page : [10, 20, 30, 50];
      },
    },
    ...Table.props,
    stripe: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    sort: String,
    asc: Boolean,
    custRequest: Function,
    method: {
      type: String,
      default: "post",
    },
    layout: String,
    auto: {
      type: Boolean,
      default: true,
    },
    overflow: {
      type: Boolean,
      default: false,
    },
    editRow: Object,
    rules: Object,
  },
  computed: {
    mainSlot() {
      return this.columns
        .map((item) => item.prop)
        .filter((item) => item && this.$scopedSlots[item]);
    },
  },
  created() {
    this.auto && this.findPage();
  },
  watch: {
    data() {
      this.findPage();
    },
  },
  provide() {
    return {
      tableForm: this.getTabelForm,
      editRow: this.editRow,
      table: this,
    };
  },
  methods: {
    defaultRowClassName({ row, rowIndex }) {
      const className =
        (this.rowClassName && this.rowClassName({ row, rowIndex })) || "";
      if (this.overflow) {
        return row == this.highItem ? className : className + " text-lines-1";
      } else {
        return className;
      }
    },
    cellClick(...items) {
      this.$emit("cell-click", ...items);
    },
    // 选择切换
    selectionChange(selItems) {
      this.selItems = selItems;
      this.$emit("selection-change", selItems);
    },
    currentChange(row, oldRow) {
      //当前高亮显示的行
      this.highItem = row;
      this.$emit("current-change", row, oldRow);
    },
    findPage() {
      //search
      this.pageRequest.page = 1;
      //判断分页方式
      this.paginationType == "server"
        ? this.findPageServer()
        : this.findPageClient();
      this.$refs.table && this.$refs.table.clearSelection(); // 使用查询条件， 清除选中状态
      this.$refs.table && this.selectionChange([]);
    },
    findPageServer() {
      this.loading = true;
      const query = Object.assign({}, this.query);
      let promise =
        (this.url && this.urlRequest({ ...this.pageRequest, query })) ||
        this.custRequest({ ...this.pageRequest, query });
      promise &&
        promise
          .then((res) => {
            //判断返回类型
            this.content = res.data.content; //封装数据
            this.pageRequest.total = res.data.total || 0;
            this.after({
              ...this.pageRequest,
              data: res.data.content,
            });
          })
          .finally((_) => {
            this.loading = false;
          });
    },
    findPageClient() {
      this.loading = true;
      let promise =
        (this.url && this.urlRequest(this.query)) ||
        (this.custRequest && this.custRequest(Object.assign({}, this.query))) ||
        new Promise((resolve) => resolve(this.data));
      promise &&
        promise
          .then((res) => {
            (res.code && res.code == 500 && (this.allContent = [])) ||
              (this.allContent = res.data || res);
            this.doPagiation();
            this.after(Object.assign([], this.allContent));
          })
          .finally((_) => {
            this.loading = false;
          });
    },
    doFilter(_allContent = this.allContent) {
      let limit = this.pageRequest.limit;
      let page = this.pageRequest.page;
      this.content = _allContent.filter((item, index) => {
        return index >= limit * (page - 1) && index <= page * limit - 1;
      });
      this.pageRequest.total = _allContent.length;
    },
    doPagiation() {
      if (this.paginationType === "server") this.findPageServer();
      else if (this.allContent) {
        (this.showAll && (this.content = this.allContent)) ||
          this.doFilter(this.allContent);
      } else {
        this.findPageClient();
      }
    },
    sortChange(sortItem) {
      if (this.paginationType === "client") {
        (sortItem.order === "ascending" &&
          this.allContent.sort(byAsc(sortItem.prop))) ||
          this.allContent.sort(byDesc(sortItem.prop));
      } else {
        this.pageRequest.sort = this.underline
          ? this.toLine(sortItem.prop)
          : sortItem.prop;
        this.pageRequest.asc = sortItem.order === "ascending";
      }
      this.doPagiation();
    },
    show(column) {
      if (column.show == undefined) this.$set(column, "show", true);
      return column.show;
    },
    after(params) {
      //每次查询后执行的方法
      this.$emit("after", params);
    },
    toLine(name) {
      // 驼峰转换下划线
      return name.replace(/([A-Z])/g, "_$1").toLowerCase();
    },
    setData(data) {
      this.allContent = data;
      this.data = data;
    },
    getTabelForm() {
      return this.$refs.tableForm;
    },
    urlRequest(params) {
      return this.$OPTS.table.urlRequest();
    },
    onRefresh() {
      //刷新
      this.findPage();
      this.$emit("on-refresh");
    },
    selectChange(...item) {
      this.$emit("select", ...item);
    },
  },
  mounted() {
    //请求数据
    this.filterColumns = this.columns;
  },
  data() {
    return {
      content: [],
      allContent: null,
      pageRequest: {
        page: 1, //页码
        limit: this.limit, //每页数量
        total: 0, //服务端返回的总数量
        sort: null,
        asc: null,
      },
      loading: false, // 加载标识
      highItem: null, ///当前高亮显示的行
      selItems: [], // 列表选中列
    };
  },
};
</script>
