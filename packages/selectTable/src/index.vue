<template>
  <div class="wm-selectTable" :style="{ width: width }">
    <el-input
      readonly
      v-model="selectData"
      :placeholder="placeholder"
      @focus="clickInput"
    ></el-input>
    <div v-show="showTable" class="table-wapper">
      <div style="margin: 10px 0" class="table-ab">
        <el-input v-model="filter" placeholder="查询内容" style="width: 400px">
          <el-button slot="append" @click="search">查询</el-button>
        </el-input>
        <el-table
          ref="multipleTable"
          stripe
          @row-click="selectRadio"
          :data="showTableData"
          @selection-change="handleSelectionChange"
          style="border: 1px solid #ccc"
          :border='true'
        >
          <el-table-column
            type="selection"
            v-if="type === 'checkbox'"
            width="55"
          >
          </el-table-column>
          <el-table-column v-if="type === 'radio'" width="55">
            <template scope="scope">
              <el-radio :label="scope.$index" v-model="radio">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(column, index) in columns"
            :width="column.width"
            :label="column.title"
            :key="index"
            :prop="column.dataIndex"
            :show-overflow-tooltip="true"
            aligh="left"
          >
          </el-table-column>
        </el-table>
        <el-pagination
          :hide-on-single-page="true"
          :total="copyTableData.length"
          :page-size="pageSize"
          layout="prev, pager, next"
          @current-change="changeCurrentPage"
          @prev-click="changeCurrentPage"
          @next-click="changeCurrentPage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
export default {
  name: "wmSelectTable",
  mixins: [Locale],
  props: {
    // 表格表头
    columns: {
      type: Array,
      required: true,
    },
    // 表格数据
    tableData: {
      type: Array,
      required: true,
    },
    // radio|checkbox
    type: {
      type: String,
      default: "radio",
    },
    // 表格的每页数据
    pageSize: {
      type: Number,
      default: 10,
    },
    // 组件宽度
    width: {
      type: String,
      default: "600px",
    },
    // 输入框显示的字段名，如果为空，则全部显示
    showField: {
      type: String,
      default: "",
    },
    // 外层选中的数据回传
    choosenData: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showTable: false,
      // 当前选中的radio框
      radio: "",
      // 切换page保存之前选中的项 格式{page: 1, index: 1, 加入原有的数据项}
      chosenArray: [],
      showTableData: [],
      copyTableData: [],
      currentPage: 1,
      filter: "",
      selectData: "",
    };
  },
  mounted() {
    if (this.tableData.length > 0) {
      Object.assign(this.copyTableData, this.tableData);
      this.createTableData(1);
    }
    if (this.choosenData.length > 0) {
      this.choosenData.forEach((res) => {
        this.copyTableData.forEach((re, index) => {
          if (re.id === res.id) {
            const pageIndex = Math.floor(index / this.pageSize);
            const currentIndex = index - pageIndex * this.pageSize;
            this.chosenArray.push({
              page: pageIndex + 1,
              index: currentIndex,
              ...res,
            });
          }
        });
      });
    }
    if (this.chosenArray.length > 0) {
      const row = [];
      this.chosenArray.forEach((res) => {
        if (res.page === 1) {
          if (this.type === "radio") {
            this.radio = res.index;
          } else {
            this.chosenArray.forEach((re) => {
              row.push(re);
            });
          }
        }
      });
      if (this.type === "checkbox") {
        this.choosenData.forEach((res) => {
          this.$refs.multipleTable.toggleRowSelection(res);
        });
        this.handleSelectData(this.choosenData);
      }
    }
  },
  watch: {
    currentPage: {
      handler(val) {
        if (this.type === "radio") {
          const index = this.chosenArray.findIndex((res) => res.page === val);
          if (index > -1) {
            this.radio = this.chosenArray[index].index;
          }
        } else if (this.type === "checkbox") {
          const row = [];
          this.chosenArray.forEach((res) => {
            if (res.page === val) {
              row.push(res);
            }
          });
        }
      },
      deep: true,
    },
  },
  methods: {
    clickInput() {
      this.showTable = !this.showTable;
    },
    handleSelectData(data) {
      this.$emit("selectVal", data);
      this.selectData = "";
      if (this.type === "radio") {
        this.radio = this.showTableData.indexOf(data[0]);
        this.chosenArray = [];
        this.chosenArray.push({
          page: this.currentPage,
          index: this.radio,
          ...data[0],
        });
      } else if (this.type === "checkbox") {
        // 先去除 chosenArray中当前页数的保存
        this.chosenArray = this.chosenArray.filter(
          (res) => res.page !== this.currentPage
        );
        data.forEach((res) => {
          const index = this.showTableData.findIndex((re) => re.id === res.id);
          this.chosenArray.push({
            page: this.currentPage,
            index: index,
            ...res,
          });
        });
      }
      this.chosenArray.forEach((res) => {
        for (const key in res) {
          this.columns.forEach((column) => {
            if (
              (this.showField &&
                this.showField === column.dataIndex &&
                !this.selectData) ||
              (!this.showField && key === column.dataIndex)
            ) {
              this.selectData +=
                column.title + "：" + res[this.showField] + "，";
            }
          });
        }
      });
    },
    handleSelectionChange(val) {
      this.handleSelectData(val);
    },
    selectRadio(row) {
      if (this.type === "radio") {
        this.handleSelectData([row]);
      }
    },
    changeCurrentPage(val) {
      this.createTableData(val);
    },
    createTableData(currentPage) {
      this.radio = "";
      this.currentPage = currentPage;
      this.showTableData = this.copyTableData.slice(
        (currentPage - 1) * this.pageSize,
        this.pageSize * currentPage
      );
    },
    search() {
      this.radio = "";
      this.selectData = "";
      this.chosenArray = [];
      this.currentPage = 1;
      this.copyTableData = this.tableData.filter((res) => {
        for (const key in res) {
          if (res[key] && res[key].includes(this.filter)) {
            return true;
          }
        }
      });
      this.changeCurrentPage(this.currentPage);
    },
  },
};
</script>
<style scoped>
.wm-selectTable {
  display: relative;
}
.table-wapper {
  border: 1px solid #ccc;
}
.table-ab {
  position: absolute;
  z-index: 9999;
}
</style>
