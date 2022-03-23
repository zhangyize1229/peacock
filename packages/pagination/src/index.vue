<template>
  <div class="wm-pagination">
    <!--极简-->
    <el-pagination
        v-if="mode==='mini'"
        background
        :layout="layout"
        :page-size="size"
        :total="total"
        :current-page.sync="current"
        :disabled="disabled"
        :hideOnSinglePage="hideOnSinglePage"
        :popperClass="popperClass"
        :prevText="prevText"
        :nextText="nextText"
        @prev-click="(curr)=>change({current: curr, size})"
        @next-click="(curr)=>change({current: curr, size})"
    >
      <span class="pager">{{ current + '/' + pageCount }}</span>
    </el-pagination>

    <!--普通-->
    <el-pagination
        v-else
        background
        :total="total"
        :layout="layout"
        :pager-count="actualPagerCount"
        :current-page.sync="current"
        :page-sizes="pageSizes"
        :disabled="disabled"
        :hideOnSinglePage="hideOnSinglePage"
        :popperClass="popperClass"
        :prevText="prevText"
        :nextText="nextText"
        @size-change="(s)=>change({current, size:s})"
        @current-change="(curr)=>change({current: curr, size})"
    />
  </div>
</template>

<script>
export default {
  name: "WmPagination",
  props: {
    mode: {// 三种模式：mini：极简；simple：简单；default：默认显示全部操作按钮
      type: String,
      default: undefined
    },
    total: {
      type: Number,
      default: 100
    },
    currentPage: {
      type: Number,
      default: undefined
    },
    pagerCount: { // 最大页面按钮数;大于等于 6 且小于等于22偶数
      type: Number,
      default: 6
    },
    pageSizes: { // 每页显示个数选择器的选项设置
      type: Array,
      default: () => ([15, 50, 100])
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    hideOnSinglePage: { // 只有一页时是否隐藏
      type: Boolean,
      default: false
    },
    popperClass: { // 每页显示个数选择器的下拉框类名
      type: String,
      default: undefined
    },
    prevText: { // 替代图标显示的上一页文字
      type: String,
      default: undefined
    },
    nextText: { // 替代图标显示的下一页文字
      type: String,
      default: undefined
    },
  },
  data() {
    return {
      current: 1,
      size: 15
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.size)
    },
    actualPagerCount() {
      return this.pagerCount - 1
    },
    layout() {
      let lay = ''
      switch (this.mode) {
        case 'mini':
          lay = 'prev, slot, next'
          break
        case 'simple':
          lay = 'sizes, prev, pager, next'
          break
        default:
          lay = 'total, sizes, prev, pager, next, jumper'
          break
      }
      return lay
    }
  },
  watch: {
    pageSizes: {
      handler(val) {
        this.size = val[0] ? val[0] : 15
      },
      immediate: true,
      deep: true
    },
    currentPage: {
      handler(val) {
        if (val) {
          this.current = val
        }
      },
      immediate: true
    }
  },
  methods: {
    change(page) {
      this.current = page.current
      this.size = page.size
      this.$emit('change', this.current)
    }
  }
}
</script>