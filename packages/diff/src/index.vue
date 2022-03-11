<template>
  <div class="wm-diff" v-html="html" />
</template>

<script>
import Locale from "../../../src/mixins/locale";
import { createPatch } from 'diff'
import * as Diff2Html from 'diff2html'
import 'diff2html/bundles/css/diff2html.min.css';
export default {
  name: 'WmDiff',
  mixins: [Locale],
  props: {
    oldString: {
      type: String,
      default: ''
    },
    newString: {
      type: String,
      default: ''
    },
    context: {
      type: Number,
      default: 2500
    },
    outputFormat: {
      type: String,
      default: 'side-by-side'
    },
    drawFileList: {
      type: Boolean,
      default: false
    },
    fileName: {
      type: String,
      default: ''
    },
  },
  computed: {
    html () {
      return this.createdHtml(this.oldString, this.newString, this.context, this.outputFormat, this.drawFileList, this.renderNothingWhenEmpty, this.fileName, this.isShowNoChange)
    }
  },
  methods: {
    createdHtml (oldString, newString, context, outputFormat, drawFileList, renderNothingWhenEmpty, fileName, isShowNoChange) {
      function hljs (html) {
        return html.replace(/<span >(.+?)<\/span>/g, '<span><code>$1</code></span>')
      }
      const args = [fileName, oldString, newString, '', '', { context: context }]
      const dd = createPatch(...args)
      const outStr = Diff2Html.parse(dd, {
        inputFormat: 'diff',
        outputFormat: outputFormat,
        drawFileList: drawFileList,
        matching: 'none',
        renderNothingWhenEmpty: true
      })
      const { blocks } = outStr[0];
      // 使用diffHtml render
      const html = Diff2Html.html(outStr, {
        inputFormat: 'json',
        outputFormat: outputFormat,
        drawFileList: drawFileList,
        matching: 'none',
        renderNothingWhenEmpty: true
      })
      return hljs(html)
    }
  }
}
</script>
